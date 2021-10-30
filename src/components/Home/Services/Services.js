import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TopBarProgress from "react-topbar-progress-indicator";
import SingalService from "../SingalService/SingalService";
import useAllPlaces from "./../../../Hooks/useAllPlaces";
import Skeliton from "./../../Skeliton/Skeliton";
import "./Services.css";

TopBarProgress.config({
  barColors: {
    0: "#e74c3c",
    "1.0": "#e74c3c",
  },
  shadowBlur: 2,
});

const Services = () => {
  const { places, isdataLoading } = useAllPlaces();

  return (
    <section className="main-services py-5" id="services">
      {isdataLoading && <TopBarProgress />}
      <Container>
        <Row className="g-4">
          <Col xs={12} md={12} lg={12}>
            <h1 className="place-title text-center my-5">
              Amazing sailing week
            </h1>
          </Col>
          {places.map((visit) =>
            isdataLoading ? (
              <Skeliton key={visit._id} />
            ) : (
              <SingalService visit={visit} key={visit._id} />
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
