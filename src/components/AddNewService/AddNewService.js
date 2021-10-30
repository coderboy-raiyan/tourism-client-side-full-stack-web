import React from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddNewService.css";

const AddNewService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="add-service">
      <Container>
        <Row className="d-flex justify-content-center align-items-start py-5">
          <Col xs={12} lg={12} md={12}>
            <h2 className="text-center py-3 mb-5 fw-bold text-dark border-2 border-bottom w-50 m-auto">
              Add a new service
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
        </Row>
      </Container>
    </section>
  );
};

export default AddNewService;
