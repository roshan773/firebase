import React, { useState } from "react";
import { auth, provider } from "../Service/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //logic
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignInBtn = async() =>
  {
    try {
        const GoogleData = await signInWithPopup (auth,provider)
        console.log(GoogleData)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div style={{width:"25%",margin:"auto",marginTop:"50px",border:"2px solid black",borderRadius:"20px",padding:"30px 20px",textAlign:"center"}}>
        <h1>SignIn</h1>
      <form onSubmit={handleSubmit} style={{marginBottom:"20px"}}>
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
      <GoogleButton style={{height:"50px",margin:"auto"}}
        onClick={handleGoogleSignInBtn}
      />
    </div>
  );
};

export default SignIn;
