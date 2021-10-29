import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="page-not">
      <Container>
        <Row className="py-4">
          <Col xs={12} lg={12} md={12}>
            <div className="back-btn">
              <button onClick={() => window.history.back()}>
                {" "}
                <BsArrowLeft size={20} className="me-2" /> Back
              </button>
            </div>
          </Col>
          <Col xs={12} lg={12} md={12}>
            <div className="not-found-image d-flex justify-content-center align-items-center flex-column">
              <div>
                <img
                  src="https://i.ibb.co/F5P8q4t/404-Error-Page-not-Found-with-people-connecting-a-plug-pana.png"
                  alt=""
                  width="500px"
                />
              </div>
              <Link className="text-decoration-none" to="/home">
                <button className="d-block btn btn-outline-dark m-auto py-2 px-5">
                  Home
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFound;
