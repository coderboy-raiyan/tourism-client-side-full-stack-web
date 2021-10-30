import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
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
    Swal.fire({
      title: "Do you want to update this one?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/placeorder`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id: id }),
        })
          .then((res) => res.json())
          .then((data) => {
            setUpdated(data);
            Swal.fire("Saved!", "", "success");
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  // Delete a order from dashboard.
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/placeorder/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              const updatedOrders = allOrders.filter(
                (order) => order._id !== id
              );
              setAllOrders(updatedOrders);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              toast.success("🚀 Order Deleted!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          });
      } else {
        Swal.fire("it's okay!", "", "info");
      }
    });
  };

  return (
    <section className="main-dashboard">
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
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
                    handelDelete={handelDelete}
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
