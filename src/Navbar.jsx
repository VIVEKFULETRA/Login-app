import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Phoenix</MDBNavbarBrand>
          <MDBNavbarLink>
            <Link to="/" style={{ color: "red" }}>
              Login
            </Link>
          </MDBNavbarLink>
        </MDBContainer>
      </MDBNavbar>
   </>
  );
};

export default Navbar;
