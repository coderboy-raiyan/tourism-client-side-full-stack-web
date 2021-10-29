import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "./../../../Hooks/useAuth";

const Header = () => {
  const { logout, userData, isLoading } = useAuth();
  console.log(isLoading);
  return (
    <Navbar bg="light" sticky="top" expand="lg" className="p-3 shadow-sm">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src="https://shinetheme.com/travelerdata/yatour/wp-content/uploads/2018/11/logo_yatour.svg"
            alt=""
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 ">
            <li className="nav-item me-3 mt-2">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item mt-2  me-3">
              <Link className="nav-link" to="/orders">
                My orders
              </Link>
            </li>
            <li className="nav-item  mt-2 me-3">
              <Link className="nav-link" to="/manageorders">
                Manage Orders
              </Link>
            </li>
            {userData.email ? (
              <>
                <li className="nav-item d-flex justify-content-center align-items-center  me-3">
                  <div>
                    <img
                      src={userData?.photoURL}
                      alt=""
                      width="50px"
                      className="rounded-circle "
                    />
                  </div>
                  <h6 className="ms-3 mb-0">{userData?.displayName}</h6>
                  <div className="  me-3">
                    <button className="nav-link btn btn-light" onClick={logout}>
                      <FiLogOut size={20} />
                    </button>
                  </div>
                </li>
              </>
            ) : (
              <li className="nav-item mt-2  me-3">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
