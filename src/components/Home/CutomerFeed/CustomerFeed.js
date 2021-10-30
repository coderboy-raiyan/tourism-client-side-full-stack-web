import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import "./CustomerFeed.css";
const CustomerFeed = () => {
  const feed = [
    {
      title: "Babila Ebwélé",
      hooby: "Traveller",
      des: "We had 10 days. Iguazu Falls, Rio, and Paraty. We had Orico as a guide for the first 4 days...he was fabulous.",
      img: "https://shinetheme.com/travelerdata/yatour/wp-content/uploads/2015/01/tour_img-1355891-145-3-690x850.jpg",
    },
    {
      title: "Dushane Daniel",
      hooby: "Traveller",
      des: "As I already said we really enjoyed the trip whatsoever and I reckon that the best moments were when we visited Komodo Island                         ",
      img: "https://shinetheme.com/travelerdata/yatour/wp-content/uploads/2015/01/tour_img-755008-145-3-690x850.jpg",
    },
  ];
  return (
    <section className="customer-feed">
      <Container>
        <Row>
          <Col xs={12} lg={12} md={12}>
            <h1 className="feed-title text-center pb-5">Customer Feedback</h1>
          </Col>
        </Row>
        <Row className="py-5">
          {feed.map((item, index) => {
            return (
              <Col xs={12} lg={6} md={6} key={index}>
                <div className="feedback-item shadow-sm p-3 border rounded mb-4">
                  <Row>
                    <Col xs={12} lg={6} md={6}>
                      <div className="feedback-des">
                        <p className="feed-title">{item.title}</p>
                        <p className="feed-hobby">
                          <small>{item.hooby}</small>
                        </p>
                        <p className="feedback-des">{item.des}</p>
                      </div>
                    </Col>
                    <Col xs={12} lg={6} md={6}>
                      <div className="feed-banner">
                        <img src={item.img} alt="" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row className="py-5">
          <Col xs={12} lg={12} md={12}>
            <button className="btn btn-outline-dark d-block m-auto mt-5  py-2 px-5">
              See more <BsArrowRight size={20} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomerFeed;
