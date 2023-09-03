import React, { useEffect, useState } from "react";
import "./UsersList.css";
import "antd/dist/antd.css";
import ReactPaginate from "react-paginate";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Pagination } from "antd";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [pageCount, setPageCount] = useState(0);

  const itemPerPage = 10;
  const pageVisited = pageCount * itemPerPage;

  useEffect(() => {
    getUsersDetails();
  }, [pageCount]);

  const getUsersDetails = () => {
    fetch(`http://localhost:4500/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        // Filter users based on search input
        filterUsers(searchUser, data.users);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const deleteUserById = (id) => {
    fetch(`http://localhost:4500/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log("User Deleted Successfully");
          getUsersDetails(); // Fetch the updated user list after deletion
        } else {
          console.error("Failed to delete user.");
        }
      })
      .catch((err) => {
        console.error("Error:", err.message);
      });
  };

  const deleteUser = (id) => {
    deleteUserById(id);
  };
  const filterUsers = (searchTerm, usersList) => {
    const filtered = usersList.filter((user) => {
      return (
        user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.mobile_no.includes(searchTerm) ||
        user.gender.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredUsers(filtered);
  };

  let serialNumber = pageVisited + 1; // Initialize the serial number

  return (
    <div className="container">
      <br />
      <input
        type="text"
        name="name"
        placeholder="Search by any field"
        value={searchUser}
        onChange={(e) => {
          setSearchUser(e.target.value);
          filterUsers(e.target.value, users); // Update filtered users on input change
        }}
      />

      <table className="table">
        <thead>
          <tr>
            <th className="sn">S.no</th> {/* Serial number column */}
            <th>Full Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {(filteredUsers.length > 0 ? filteredUsers : users)
            .slice(pageVisited, pageVisited + itemPerPage)
            .map((user) => (
              <tr key={user._id}>
                <td>{serialNumber++}</td> {/* Display the serial number */}
                <td>{user.full_name}</td>
                <td>{user.mobile_no}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td className="btn">
                  {/* <button onClick={editUserDetails}>
                    <AiFillEdit />
                  </button> */}
                  <button onClick={() => deleteUser(user._id)}>
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <br />
      <br />

      {/* pagination */}
      <ReactPaginate
        className="pagination"
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={Math.ceil(
          (filteredUsers.length > 0 ? filteredUsers.length : users.length) /
            itemPerPage
        )}
        onPageChange={(selected) => {
          setPageCount(selected.selected);
        }}
        containerClassName={"pagination-container"}
      />
    </div>
  );
}

export default UsersList;
