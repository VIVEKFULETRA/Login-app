import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
import Home from "./Home";
import Userdata from "./Userdata";
import Useradd from "./Useradd";
import Userdetails from "./Userdetails";
import Useredit from "./Useredit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<Admin />}>
            <Route path="userdata" element={<Userdata/>} />
            <Route path="useradd" element={<Useradd/>} />
            <Route path="userdetails/:userid" element={<Userdetails/>} />
            <Route path="useredit/:userid" element={<Useredit/>} />
          </Route>
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
