import React from "react";
import { Card, Col } from "react-bootstrap";
import { BsSpeedometer2 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import Rating from "react-rating";
import { useHistory } from "react-router-dom";
import "./SingalService.css";

const SingalService = ({ visit }) => {
  const {
    title,
    img,
    _id,
    hr,
    discount,
    des,
    people,
    place,
    ratings,
    reviews,
  } = visit;
  const history = useHistory();

  const handelPlace = () => {
    history.push(`/order/${_id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Col xs={12} md={4} lg={4}>
      <Card className="h-100 main-card shadow-sm">
        <div className="card-img">
          <img src={img} alt="" />
        </div>

        <Card.Body>
          <p className="placeName">
            <GoLocation /> <small>{place}</small>
          </p>
          <Card.Title className="card-title">{title}</Card.Title>
          <p className="des">
            {des.slice(0, 70)}{" "}
            <span className="text-primary">read more...</span>{" "}
          </p>
          <p className="ratings">
            <span>
              <Rating
                emptySymbol={<i className="bi bi-star-half"></i>}
                fullSymbol={<i className="bi bi-star-fill"></i>}
                readonly
                initialRating={ratings}
              />
            </span>{" "}
            <span className="rating-title">{reviews} Reviews</span>
          </p>
          <p className="hour-people">
            {" "}
            <span className="people-icon">
              {" "}
              <MdPeopleAlt size="20px" /> {people} people
            </span>{" "}
            <span className="person-title">
              {" "}
              <BsSpeedometer2 size="20px" /> {hr} hours
            </span>{" "}
          </p>

          <button onClick={handelPlace} className="book-now">
            Book Now
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingalService;
