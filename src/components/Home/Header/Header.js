import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "./../../../Hooks/useAuth";

const Header = () => {
  const { logout, userData, isLoading } = useAuth();
  console.log(isLoading);
  return (
    <Navbar bg="light" sticky="top" expand="lg" className="p-3 shadow-sm">
      <Container fluid>
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
              <Link
                className="nav-link"
                to="/home"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mt-2  me-3">
              <Link
                className="nav-link"
                to="/orders"
                onClick={() => window.scrollTo(0, 0)}
              >
                My orders
              </Link>
            </li>

            <li className="nav-item  mt-2 me-3">
              <HashLink
                className="nav-link"
                to="/home#services"
                onClick={() => window.scrollTo(0, 0)}
              >
                Services
              </HashLink>
            </li>

            {userData.email ? (
              <>
                <li className="nav-item  mt-2 me-3">
                  <Link
                    className="nav-link"
                    to="/addnewservice"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Add New Service
                  </Link>
                </li>
                <li className="nav-item  mt-2 me-3">
                  <Link
                    className="nav-link"
                    to="/manageorders"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Manage All Orders
                  </Link>
                </li>
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
                <Link
                  className="nav-link"
                  to="/login"
                  onClick={() => window.scrollTo(0, 0)}
                >
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
