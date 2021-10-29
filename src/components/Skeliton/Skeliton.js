import React from "react";
import { Card, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Skeliton = () => {
  return (
    <Col xs={12} lg={4} md={4}>
      <Card className="h-100 main-card shadow-sm">
        <div className="card-img p-3">
          <Skeleton height={250} />
        </div>

        <Card.Body>
          <p className="placeName">
            <small>
              {" "}
              <Skeleton />
            </small>
          </p>
          <Card.Title className="card-title">
            <Skeleton />
          </Card.Title>
          <p className="des">
            <span className="text-primary">
              <Skeleton count={2} />
            </span>{" "}
          </p>
          <p className="ratings">
            <span className="rating-title">
              <Skeleton />
            </span>
          </p>
          <p className="hour-people">
            <Skeleton count={2} />
            <span className="people-icon">
              <Skeleton />
            </span>
            <span className="person-title">
              <Skeleton />
            </span>
          </p>

          <button className="book-now  px-5">
            <Skeleton />
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Skeliton;
