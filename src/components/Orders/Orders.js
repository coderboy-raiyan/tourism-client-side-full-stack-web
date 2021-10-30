import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import OrderSkeliton from "../OrderSkeliton/OrderSkeliton";
import SingalOrders from "../SingalOrders/SingalOrders";
import useAuth from "./../../Hooks/useAuth";
import "./Orders.css";

const Orders = () => {
  const { userData } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isDeleted, setDeleted] = useState(false);
  const [isOrderLoading, setOrderLoading] = useState(true);

  useEffect(() => {
    setOrderLoading(true);
    setTimeout(() => {
      setOrderLoading(false);
    }, 3000);
  }, []);

  // get all the users using their email
  useEffect(() => {
    fetch(`https://secure-lake-39134.herokuapp.com/orders/${userData.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDeleted]);

  const handelCancel = (id) => {
    Swal.fire({
      title: "Do you want to delete this order?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://secure-lake-39134.herokuapp.com/orders/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              setDeleted(data);
              // clear the deleted data from Ui
              const updatedOne = orders.filter((order) => order._id === id);
              setOrders(updatedOne);
              Swal.fire("Saved!", "", "success");
            }
          })
          .finally(() => {
            setDeleted(false);
          });
      } else if (result.isDenied) {
        Swal.fire("Ok! No Problem", "", "info");
      }
    });
  };

  return (
    <section className="main-orders">
      {/* if orders is empty */}
      {orders.length <= 0 ? (
        <div className="w-100 d-flex justify-content-center align-items-center vh-100 flex-column">
          <h3 className="text-muted">Please add a destination to see orders</h3>
          <img
            src="https://i.ibb.co/cLtWmfq/No-data-amico.png"
            alt=""
            width="500px"
          />
        </div>
      ) : (
        <Container>
          <Row>
            <Col xs={12} lg={12} md={12}>
              <h1 className="text-center py-4">Your Orders</h1>
            </Col>
          </Row>
        </Container>
      )}

      {/* all the orders */}

      <div className="all-orders">
        <Container>
          <Row className="g-4 py-4">
            {orders.map((order) =>
              isOrderLoading ? (
                <OrderSkeliton key={order._id} />
              ) : (
                <SingalOrders
                  order={order}
                  key={order._id}
                  handelCancel={handelCancel}
                />
              )
            )}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Orders;
