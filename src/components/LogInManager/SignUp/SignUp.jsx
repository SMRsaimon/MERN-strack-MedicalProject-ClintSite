import React, { useContext, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./SignUp.css";
import Google from "../../../Resource/icons/google.png";
import FB from "../../../Resource/icons/facebook.png";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, initializeLoginFramework } from "../LogInManager";
import { userContext } from "../../../App";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const { setLoggedInUser } = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

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
  const onSubmit = (data) => {
    const newUserInfo = { ...user, ...data };
    setUser(newUserInfo);
    if (data.email && data.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then((res) => {
        console.log(res, "use response");
        if (res.success) {
          handleResponse(res, true);
        } else {
          handleResponse(res, false);
        }
      });
    }
  };

  const handleResponse = (res, redirect) => {
    if (redirect) {
      setLoggedInUser(res);
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
            <h3 style={{ textAlign: "center" }}>Create an Account</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicText">
                <Form.Control
                  name="name"
                  style={{ border: "none", borderBottom: "1px solid gray" }}
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
              </Form.Group>
              {errors.name && <span className="text-danger">Name is required</span>}

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  name="email"
                  style={{ border: "none", borderBottom: "1px solid gray" }}
                  type="email"
                  placeholder="Username or Email"
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
              </Form.Group>
              {errors.email && <span className="text-danger">Enter a valied email address </span>}

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  name="password"
                  style={{ border: "none", borderBottom: "1px solid gray" }}
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "You must specify a password",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters, here Minimum 1 number value",
                    },
                    maxLength: 12,
                    pattern: /(?=.*[0-9])/i,
                  })}
                />
              </Form.Group>
              {errors.password && <span className="text-danger">{errors.password.message}</span>}

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Control
                  name="confirmPassword"
                  style={{ border: "none", borderBottom: "1px solid gray" }}
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    validate: (value) => value === password.current || "The passwords do not match",
                  })}
                />
              </Form.Group>
              {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword.message}</span>}

              <button style={{ width: "100%" }} className="head-button loInButton" variant="primary" type="submit">
                Create an Account
              </button>

              <Form.Group style={{ marginTop: "5px", textAlign: "center" }}>
                <p className="text-gray">
                  Already have an account?{" "}
                  <Link to="/login" style={{ color: "#F9A51A" }}>
                    Login
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
            {user.success && <p style={{ color: "green", textAlign: "center" }}>User created successfully!</p>}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
