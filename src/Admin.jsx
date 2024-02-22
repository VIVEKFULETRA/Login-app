import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Crud.css";
import { MDBBtn } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

const Admin = () => {

  const navigate = useNavigate();
  useEffect(() => {
    let email = sessionStorage.getItem("email");
    let role = sessionStorage.getItem("role");
    if (email === "" || email === null || role != 1) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <h1 className="txtcnt">Phoenix</h1>
      <div className="cnt">
        <Link to="userdata">
          <MDBBtn className="button">Database</MDBBtn>
        </Link>
        <Link to="useradd">
          <MDBBtn className="button">Add User</MDBBtn>
        </Link>
      </div>
      <Outlet/>
    </>
  );
};

export default Admin;
