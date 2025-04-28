import React from "react";
import { useState } from "react";
import { auth } from "../Service/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //logic

    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{width:"25%",margin:"auto",marginTop:"50px",border:"2px solid black",borderRadius:"20px",padding:"30px 20px",textAlign:"center"}}q>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter name here"
        />{" "}
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter email here"
        />{" "}
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter password here"
        />{" "}
        <br />
        <br />
        <input type="submit" />
      </form>
     
    </div>
  );
};

export default SignUp;
