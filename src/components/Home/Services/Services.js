import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TopBarProgress from "react-topbar-progress-indicator";
import SingalService from "../SingalService/SingalService";
import useAllPlaces from "./../../../Hooks/useAllPlaces";
import "./Services.css";

TopBarProgress.config({
  barColors: {
    0: "#00d2ff",
    "1.0": "#00d2ff",
  },
  shadowBlur: 2,
});

const Services = () => {
  const { places, isdataLoading } = useAllPlaces();
  console.log(places);
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
          {places.map((visit) => (
            <SingalService visit={visit} key={visit._id} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
