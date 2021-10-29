import React from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsDiscord, BsFacebook, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="updates-inner">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} md={6}>
              <div className="get-updates d-flex justify-content-center align-items-center">
                <div className="get-update-image">
                  <img
                    src="https://shinetheme.com/travelerdata/yatour/wp-content/themes/traveler/v2/images/svg/ico_email_subscribe.svg"
                    alt=""
                  />
                </div>
                <div className="get-update-des ms-4">
                  <h4>Get Updates & More</h4>
                  <p>Thoughtful thoughts to your inbox</p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <div className="update-input">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Your Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="update-input"
                  />
                  <Button variant="primary" id="button-addon2">
                    Subscribe
                  </Button>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* footer inner starts */}

      <div className="footer-inner">
        <Container>
          <Row>
            <Col xs={12} lg={3} md={3}>
              <div className="connect-us">
                <h5>Need Help</h5>
                <ul>
                  <li>
                    <span>Call us</span>
                    <h3>+ 00 222 44 5678</h3>
                  </li>
                  <li>
                    <span>Email for Us</span>
                    <h3>hello@yoursite.com</h3>
                  </li>
                  <li className="social-media">
                    <span>Follow Us</span>
                    <div className="social-media-icons">
                      <a href="/">
                        <BsFacebook />
                      </a>
                      <a href="/">
                        <BsTwitter />
                      </a>
                      <a href="/">
                        <BsDiscord />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={3} md={3}>
              <div className="connect-us">
                <h5>COMPANY</h5>
                <ul>
                  <li>
                    <Link to="*">About us</Link>
                  </li>
                  <li>
                    <Link to="*">Community Blog</Link>
                  </li>
                  <li>
                    <Link to="*">Rewards</Link>
                  </li>
                  <li>
                    <Link to="*">Work with us</Link>
                  </li>
                  <li>
                    <Link to="*">Meet the Team</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={3} md={3}>
              <div className="connect-us">
                <h5>SUPPORT</h5>
                <ul>
                  <li>
                    <Link to="*">Account</Link>
                  </li>
                  <li>
                    <Link to="*">Legal</Link>
                  </li>
                  <li>
                    <Link to="*">Contact</Link>
                  </li>
                  <li>
                    <Link to="*">Affiliate Program</Link>
                  </li>
                  <li>
                    <Link to="*">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={3} md={3}>
              <div className="connect-us">
                <h5>SETTING</h5>
                <div className="select-option">
                  <p>
                    <small>Currencies</small>
                  </p>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    {/* <option>Open this select menu</option> */}
                    <option defaultValue="1">ERO</option>
                    <option defaultValue="2">AUD</option>
                    <option defaultValue="3">USD</option>
                  </select>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={12} md={12}>
              <p className="mt-5 border-top pt-4">
                Copyright © 2021 by <Link to="/home">Raiyan</Link>{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
