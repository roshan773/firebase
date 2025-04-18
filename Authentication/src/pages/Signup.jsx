import React, { useState } from 'react';
import { auth } from '../service/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    // logic
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password, name)
      console.log(res)
      alert("User registered succesfully")
      setname("")
      setemail("")
      setpassword("")
      

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Sign Up</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="registerName" className="form-label">Full Name</label>
              <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" id="registerName" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="registerEmail" className="form-label">Email Address</label>
              <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="registerEmail" placeholder="Enter email" />
            </div>

            <div className="mb-3">
              <label htmlFor="registerPassword" className="form-label">Password</label>
              <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="registerPassword" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
