import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, provider } from '../service/firebase';
import GoogleButton from 'react-google-button';

const Signin = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      console.log(res)
      alert(`Welcome Back`)
      setemail("")
      setpassword("")


    } catch (error) {
      console.log(error)
      alert(error)
      setemail("")
      setpassword("")
    }
  }

  const handleGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider)
      console.log(res)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Login</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">Email Address</label>
              <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="loginEmail" placeholder="Enter email" />
            </div>

            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">Password</label>
              <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="loginPassword" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-success w-100">Log In</button>
          </form>
        </div>
        <hr />
        <GoogleButton
          onClick={handleGoogle}
        />
      </div>
    </div>
  );
};

export default Signin;
