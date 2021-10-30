import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GoLocation } from "react-icons/go";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./../../Hooks/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { register, handleSubmit, reset } = useForm();
  const [placeDetails, setPlaceDetails] = useState({});
  const [registerData, setRegisterData] = useState({});
  const { userData } = useAuth();
  const { orderId } = useParams();

  // getting a singal place data based on params
  useEffect(() => {
    fetch(`http://localhost:5000/places/${orderId}`)
      .then((res) => res.json())
      .then((data) => setPlaceDetails(data));
  }, []);

  const onSubmit = (data) => {
    setRegisterData(data);
    const orderStatus = placeDetails.status;

    const placeAllDetails = { ...data, placeDetails, orderStatus };

    fetch("http://localhost:5000/place/going", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(placeAllDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire("Good job!", "Order done", "success");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "Please try later ",
          });
        }
      });

    reset();
  };

  return (
    <section className="place-order">
      <div className="bg-place">
        <Container>
          <Row>
            <Col xs={12} lg={12} md={12}>
              <div className="place-title">
                <h1>{placeDetails.title}.</h1>
                <p>
                  {" "}
                  <GoLocation /> {placeDetails.place}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="d-flex justify-content-between align-items-start py-5">
          <Col xs={12} lg={12} md={12}>
            <h2 className="text-center py-3 mb-5 fw-bold text-dark border-2 border-bottom w-50 m-auto">
              Place Order
            </h2>
          </Col>
          <Col xs={12} lg={6} md={6}>
            <div className="register-inner">
              <Row>
                <Col xs={12} lg={12} md={12}>
                  <img
                    src="https://shinetheme.com/travelerdata/yatour/wp-content/uploads/2018/11/logo_yatour.svg"
                    alt=""
                    width="100px"
                    className="m-auto d-block py-4"
                  />
                </Col>
              </Row>

              <Form
                onSubmit={handleSubmit(onSubmit)}
                className="border p-5 rounded"
              >
                <Row>
                  <Col xs={12} lg={12} md={12}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="Full Name"
                        className="form-control shadow"
                        type="text"
                        defaultValue={userData?.displayName}
                        required
                        {...register("full_name")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="Username and Email"
                        className="form-control shadow"
                        type="email"
                        required
                        defaultValue={userData?.email}
                        {...register("email")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="Date"
                        className="form-control shadow"
                        type="date"
                        required
                        {...register("date")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="Description"
                        className="form-control shadow"
                        type="text"
                        required
                        {...register("description")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="place"
                        className="form-control shadow"
                        type="text"
                        required
                        defaultValue={placeDetails.place}
                        {...register("Place")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="Your Address"
                        className="form-control shadow"
                        type="text"
                        required
                        {...register("address")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <button className=" w-100 d-block mt-3 book-btn">
                      Book Now
                    </button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          {/* Booking details section starts */}

          <Col xs={12} lg={6} md={6}>
            <div className="order-main mt-5">
              <Row>
                <Col xs={12} lg={12} md={12}>
                  <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                      <img
                        src={placeDetails?.img}
                        alt=""
                        width="250px"
                        className="mb-4"
                      />
                      <Card.Title>{placeDetails?.title}</Card.Title>
                      <Card.Text>{placeDetails?.des?.slice(0, 100)}</Card.Text>
                      <Card.Text className="h5">
                        Price : ${placeDetails?.price}
                      </Card.Text>
                      <Card.Text className="h6 mt-4">
                        <GoLocation /> {placeDetails?.place}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PlaceOrder;
