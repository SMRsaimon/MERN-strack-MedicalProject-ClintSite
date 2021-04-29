import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./LogIn.css";
import Google from "../../../Resource/icons/google.png";
import FB from "../../../Resource/icons/facebook.png";

import { handleFbSignIn, handleGoogleSignIn, initializeLoginFramework, resetPassword, signInWithEmailAndPassword } from "../LogInManager";
import { userContext } from "../../../App";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  console.log(from, "from");
  const { loggedInUser, setLoggedInUser } = useContext(userContext);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    photo: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  initializeLoginFramework();
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 5;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    if (user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        if (res.success) {
          handleResponse(res, true);
        } else {
          handleResponse(res, false);
        }
      });
    }
    e.preventDefault();
  };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      if (res.success) {
        handleResponse(res, true);
      } else {
        handleResponse(res, false);
      }
    });
  };

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      if (res.success) {
        handleResponse(res, true);
      } else {
        handleResponse(res, false);
      }
    });
  };

  const handleResponse = (res, redirect) => {
    // setUser(res);

    if (redirect) {
      setLoggedInUser(res);
      // setLoggedInUser(res);
      // localStorage.setItem("userInfo", JSON.stringify(res));

      const adminCheck = {
        email: res.email,
      };

      fetch("https://smr-software-consultancy.herokuapp.com/checkAdmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminCheck),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const newUser = { ...res };
            newUser.admin = true;
            setUser(newUser);
            setLoggedInUser(newUser);

            localStorage.setItem("userInfo", JSON.stringify(newUser));
          } else {
            const newUser = { ...res };
            newUser.admin = false;
            setUser(newUser);
            setLoggedInUser(newUser);

            localStorage.setItem("userInfo", JSON.stringify(newUser));
          }
        })
        .catch((err) => {
          console.log(err);
        });
      history.replace(from);
    }
  };

  return (
    <div>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col></Col>
          <Col className="form-part">
            <h3 style={{ textAlign: "center" }}>Login</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  name="email"
                  onBlur={handleBlur}
                  style={{ border: "none", borderBottom: "1px solid gray" }}
                  type="email"
                  placeholder="Username or Email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  name="password"
                  onBlur={handleBlur}
                  style={{ border: "none", borderBottom: "1px solid gray" }}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <div className="form-bottom">
                <Form.Group>
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Link onClick={() => resetPassword(user.email)} style={{ color: "#F9A51A" }}>
                    Forgot Password
                  </Link>
                </Form.Group>
              </div>

              <input style={{ width: "100%" }} className="head-button loInButton" variant="primary" value="Login" type="submit" />

              <Form.Group style={{ marginTop: "5px", textAlign: "center" }}>
                <p className="text-gray">
                  Don't have account?{" "}
                  <Link to="/SignUp" style={{ color: "#F9A51A" }}>
                    Create an Account
                  </Link>
                </p>
              </Form.Group>
            </Form>

            <div className="d-flex justify-content-center">
              <div style={{ borderTop: "1px solid gray", width: "48%" }}></div>
              <p style={{ marginTop: "-13px" }}>or</p>
              <div style={{ borderTop: "1px solid gray", width: "48%" }}></div>
            </div>

            <div className="login-alternative">
              <button onClick={fbSignIn}>
                <img src={FB} alt="" /> Continue with Facebook
              </button>
              <button onClick={googleSignIn}>
                <img src={Google} alt="" /> Continue with Google
              </button>
            </div>

            <p style={{ color: "red", textAlign: "center" }}>{user.error}</p>
            {user.success && <p style={{ color: "green", textAlign: "center" }}>User logged In successfully!</p>}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
