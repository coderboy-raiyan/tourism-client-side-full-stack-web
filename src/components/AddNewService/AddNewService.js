import React from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./AddNewService.css";

const AddNewService = () => {
  const { register, handleSubmit, reset } = useForm();
  // Add a new service
  const onSubmit = (data) => {
    fetch("http://localhost:5000/place", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            position: "top-bottom",
            icon: "success",
            title: "Your service has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    reset();
    // console.log(data);
  };
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
            <div className="new-inner">
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
                        placeholder="Title"
                        className="form-control shadow"
                        type="text"
                        required
                        {...register("title")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="Img"
                        className="form-control shadow"
                        type="text"
                        required
                        {...register("img")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={4} md={4}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="Place or Destination"
                        className="form-control shadow"
                        type="text"
                        required
                        {...register("place")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={4} md={4}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="Ratings"
                        className="form-control shadow"
                        type="text"
                        required
                        {...register("ratings")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={4} md={4}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="Reviews"
                        className="form-control shadow"
                        type="number"
                        required
                        {...register("reviews")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={6} md={6}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="People limit"
                        className="form-control shadow"
                        type="number"
                        required
                        {...register("people")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={6} md={6}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="Price"
                        className="form-control shadow"
                        type="number"
                        required
                        {...register("price")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={6} md={6}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="Time limit ex.10hr"
                        className="form-control shadow"
                        type="number"
                        required
                        {...register("hr")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={6} md={6}>
                    <InputGroup className="mb-3">
                      <input
                        placeholder="Status"
                        className="form-control shadow"
                        type="text"
                        required
                        {...register("status")}
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
                        {...register("des")}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <button className=" w-100 d-block mt-3 book-btn shadow">
                      Add Service
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
