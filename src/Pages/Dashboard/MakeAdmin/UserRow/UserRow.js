import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { userEmail, role } = user;

  const handleMakeAdmin = () => {
    fetch(`https://best-tools-part-server.onrender.com/user/admin/${userEmail}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 403) {
          toast.error("Filed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`${userEmail} made an admin successfully`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{userEmail}</td>
      <td>
        {role ? (
          <p className="text-green-500">Already Admin</p>
        ) : (
          <button
            onClick={handleMakeAdmin}
            className="btn btn-info btn-xs text-white"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-error btn-xs text-white">
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
