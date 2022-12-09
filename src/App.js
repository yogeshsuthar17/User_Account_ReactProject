import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ChangePass from "./ChangePass";
import ForgetPass from "./ForgetPass";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Display from "./Display";
import Update from "./Update";
import Logout from "./Logout";
import Delete from "./Delete";


// import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Home page</h1>
      
      <Router>
        <Link to="/"></Link> <br/> <br/>
        <Link to="/SignUp">SignUp |</Link> <br/> <br/>
        <Link to="/Login">Login |</Link> <br/> <br/>
        <Link to="/ChangePass">Change Password |</Link> <br/> <br/>
        <Link to="/ForgetPass">Forget Password |</Link><br/> <br/>
        <Link to="/Display">display |</Link><br/> <br/>
        <Link to="/Update">Update |</Link><br/> <br/>
        <Link to="/Logout">Logout |</Link><br/> <br/>
        <Link to="/Delete">Delete |</Link><br/> <br/>
        
        
        <Routes>
          <Route path="/"  />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ChangePass" element={<ChangePass />} />
          <Route path="/ForgetPass" element={<ForgetPass />} />
          <Route path="/Display" element={<Display />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Delete" element={<Delete />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;