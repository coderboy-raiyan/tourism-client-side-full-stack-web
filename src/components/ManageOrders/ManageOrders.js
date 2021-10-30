import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import SingalDashboard from "../SingalDashboard/SingalDashboard";
import "./ManageOrders.css";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isUpdated, setUpdated] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/placeorder")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [isUpdated]);

  // update status
  const handelUpdate = (id) => {
    fetch(`http://localhost:5000/placeorder`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((data) => setUpdated(data));
  };

  return (
    <section className="main-dashboard">
      <Container>
        <Row className="py-5">
          <Col xs={12} lg={12} md={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Orders</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order) => (
                  <SingalDashboard
                    order={order}
                    key={order._id}
                    handelUpdate={handelUpdate}
                  />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ManageOrders;
