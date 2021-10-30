import React from "react";
import { AiOutlineEdit, AiTwotoneDelete } from "react-icons/ai";

const SingalDashboard = ({ order, handelUpdate }) => {
  // console.log(order);
  const { _id, email, full_name } = order;
  return (
    <>
      <tr>
        <td>{full_name}</td>
        <td>{email}</td>
        <td>{order?.placeDetails?.place}</td>
        <td>
          {" "}
          <span className="badge bg-dark p-2 text-capitalize">
            {order.orderStatus}
          </span>
        </td>
        <td className="d-flex justify-content-between align-items-center ">
          <li>
            <button
              className="btn btn-outline-secondary"
              onClick={() => handelUpdate(_id)}
            >
              Update status <AiOutlineEdit />{" "}
            </button>
          </li>
          <li>
            <button className="btn btn-transparent">
              <AiTwotoneDelete size={25} />
            </button>
          </li>
        </td>
      </tr>
    </>
  );
};

export default SingalDashboard;
