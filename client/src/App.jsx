import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import Admin from "./components/Admin";
import Vaccine from "./components/Vaccine";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/vaccine" element={<Vaccine />}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
