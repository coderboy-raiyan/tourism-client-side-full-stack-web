import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <section className="chooseus-section">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={6} md={6}>
            <div className="chooseus-inner mb-4">
              <p className="chooseus-sub-title">
                <small>WHY CHOOSE US</small>
              </p>
              <h1 className="chooseus-title">
                You live the dream. We take care of it.
              </h1>
              <p className="chooseus-des">
                Since 2014, we've helped more than 500,000 people of all ages
                enjoy the best outdoor experience of their lives. Whether it's
                for one day or a two-week vacation, close to home or a foreign
                land.
              </p>
              <button className="btn btn-outline-dark">Read More</button>
            </div>
          </Col>
          {/* choose banner */}
          <Col xs={12} md={6} lg={6}>
            <div className="choose-banner">
              <img src="https://i.ibb.co/PcxNLwC/img-2-570x600.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
