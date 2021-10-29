import React from "react";
import { Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const OrderSkeliton = () => {
  return (
    <Col xs={12} lg={6} md={6}>
      <div className="card mb-3 shadow">
        <div className="row g-0">
          <div className="col-md-4 p-2">
            <Skeleton height="70%" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <Skeleton />{" "}
              </h5>
              <p className="card-text fs-6 fw-bold text-muted">
                <Skeleton />
              </p>
              <p className="card-text fs-6">
                <Skeleton />
              </p>
              <button className="cancel-btn py-2 px-5">
                <Skeleton />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default OrderSkeliton;
