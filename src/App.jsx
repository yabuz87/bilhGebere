import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/login/Login";
import Navbar from './component/navbar/Navbar';
import Signup from './component/signup/Signup';


const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
