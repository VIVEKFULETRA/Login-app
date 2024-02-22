import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    sessionStorage.clear()
  })

  const login = () => {
    // console.log("login")
    fetch("http://localhost:5000/user?email=" + email).then((result) => {
      // console.log(result);
      result.json().then((resp) => {
        // console.log(resp);
        if (resp[0] && resp[0].password == password) {
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("role", resp[0].role);
          if (resp[0].role == 1) {
            navigate("/admin");
          } else {
            navigate("/home");
          }
        } else {
          alert("Invalid User");
        }
      });
    });
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <MDBInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
          />
          <MDBInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn onClick={login} className="mb-4 w-100" size="lg">
            Login
          </MDBBtn>
          <p className="mb-5 pb-lg-2 text-center">
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "red" }}>
              Register here
            </Link>
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
