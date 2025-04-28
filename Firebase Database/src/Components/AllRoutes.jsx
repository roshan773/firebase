// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivatePage"; // or wherever your PrivateRoute is


import { AuthProvider } from "../Context/AuthContext";
import Product from "../Pages/Product";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";

function App() {
  return (
    <AuthProvider> {/* ✅ Wrap everything inside AuthProvider */}
  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Product/>
            </PrivateRoute>
          } />
          <Route path="/signup"  element={<SignUp/>}/>
        </Routes>
 
    </AuthProvider>
  );
}

export default App;
