import React, { useState, useEffect } from "react";
import { db } from "../service/firebase";
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import "./App.css";

const initializestate = {
  name: "",
  email: "",
  age: ""
}

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(initializestate);

  // 1. Read Operation - Fetch users in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "user"), (snapshot) => {
      const usersList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 2. Create Operation - Add new user
  const handleAddUser = async (e) => {
    e.preventDefault();
    const { name, email, age } = formData;
    if (!name || !email || !age || isNaN(age)) {
      alert("Please fill all fields with valid data (age must be a number).");
      return;
    }
    try {
      await addDoc(collection(db, "user"), {
        name,
        email,
        age: Number(age),
      });
      setFormData(initializestate); 
    } catch (error) {
      alert("Error adding user: " + error.message);
    }
  };

  // 3. Update Operation - Update existing user
  const handleUpdateUser = async (id, currentUser) => {
    const newName = prompt("Enter new name:", currentUser.name);
    const newEmail = prompt("Enter new email:", currentUser.email);
    const newAge = prompt("Enter new age:", currentUser.age);
    if (!newName || !newEmail || !newAge || isNaN(newAge)) {
      alert("Please fill all fields with valid data (age must be a number).");
      return;
    }
    try {
      await updateDoc(doc(db, "user", id), {
        name: newName,
        email: newEmail,
        age: Number(newAge),
      });
    } catch (error) {
      alert("Error updating user: " + error.message);
    }
  };

  // 4. Delete Operation - Delete user with confirmation
  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteDoc(doc(db, "user", id));
      } catch (error) {
        alert("Error deleting user: " + error.message);
      }
    }
  };

  return (
    <div className="app">
      <h1>User Management</h1>
      <form onSubmit={handleAddUser} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <button type="submit">Add User</button>
      </form>
      <h2>Users</h2>
      <ul className="users-list">
        {users.map((user) => (
          <>
            <li key={user.id} className="user-item">
              <div className="user-info">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Age:</strong> {user.age}</p>
              </div>
              <div className="user-actions">
                <button className="update-btn" onClick={() => handleUpdateUser(user.id, user)}>Update</button>
                <button className="delete-btn" onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default App;