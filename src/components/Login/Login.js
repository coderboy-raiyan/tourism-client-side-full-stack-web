import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleSignIn, setError } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const handelGoogle = () => {
    googleSignIn().then(() => {
      history.push(redirect_uri);
      setError("");
      Swal.fire("Great 🚀", "Thanks for login enjoy", "success");
    });
  };

  return (
    <section className="bg-light">
      <Container>
        <Row className="d-flex justify-content-center vh-100 align-items-center">
          <Col xs={12} lg={6} md={6}>
            <div className="login-inner shadow-sm">
              <Row className="">
                <Col xs={12} lg={12} md={12}>
                  <h5 className="text-center">Please Login</h5>
                </Col>
                <Col xs={12} lg={12} md={12}>
                  <div className="login-btn" onClick={handelGoogle}>
                    <div className="google-icon">
                      <FcGoogle />
                    </div>
                    <div className="google-title">
                      <p>Connect with google </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={12} md={12}>
                  <p className="text-center">
                    Don’t have an account? Create here
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
