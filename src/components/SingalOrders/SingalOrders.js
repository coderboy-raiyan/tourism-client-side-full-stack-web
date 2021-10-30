import React from "react";
import { Col } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import "./SingalOrders.css";

const SingalOrders = ({ order, handelCancel }) => {
  const { Place, date, des } = order;
  console.log(order);
  return (
    <Col xs={12} lg={6} md={6}>
      <div className="card mb-3 shadow">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={order?.placeDetails?.img}
              className="p-3 rounded"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{order?.placeDetails?.title}</h5>
              <p className="card-text fs-6 fw-bold text-muted">
                Booked : {date}
              </p>
              <p className="card-text fs-6">
                <GoLocation /> {order?.placeDetails?.place}
              </p>
              <span class="badge bg-dark p-2 text-capitalize">
                {order?.placeDetails?.status}
              </span>
              <button
                className="cancel-btn"
                onClick={() => handelCancel(order._id)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingalOrders;
