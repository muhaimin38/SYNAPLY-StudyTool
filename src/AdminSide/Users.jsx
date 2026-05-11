import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Users() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    status: "",
  });

  const [users, setUsers] = useState([
    {
      name: "Ali",
      email: "ali@gmail.com",
      role: "Sub-Admin",
      status: "Active",
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  }

  // ADD or UPDATE USER
  function handleAddUser() {
    if (editIndex !== null) {
      // update
      const updatedUsers = [...users];
      updatedUsers[editIndex] = data;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      // add
      setUsers((prevUsers) => [...prevUsers, data]);
    }

    setData({
      name: "",
      email: "",
      password: "",
      role: "",
      status: "",
    });
  }

  // DELETE USER
  function handleDelete(index) {
    const filteredUsers = users.filter((_, i) => i !== index);
    setUsers(filteredUsers);
  }

  // EDIT USER
  function handleEdit(index) {
    setData(users[index]);
    setEditIndex(index);
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <h2>User Management</h2>

        {/* FORM */}
        <div className="card p-3 mb-4">
          <h5>{editIndex !== null ? "Edit User" : "Add New User"}</h5>

          <input
            className="form-control mb-2"
            placeholder="Full Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />

          <select
            className="form-select mb-2"
            name="role"
            value={data.role}
            onChange={handleChange}
          >
            <option>Select Role</option>
            <option>Sub-Admin</option>
            <option>Moderator</option>
            <option>Staff</option>
          </select>

          <input
            className="form-control mb-2"
            placeholder="Status"
            name="status"
            value={data.status}
            onChange={handleChange}
          />

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddUser}
          >
            {editIndex !== null ? "Update User" : "Add User"}
          </button>
        </div>

        {/* TABLE */}
        <div className="card p-3">
          <h5>All Users</h5>

          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>

                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}