import React from "react";

export default function Users() {
  return (
    <div>

      <h2>User Management</h2>

      {/* CREATE USER FORM */}
      <div className="card p-3 mb-4">
        <h5>Add New User</h5>

        <form>
          <div className="row">

            <div className="col-md-4 mb-2">
              <input className="form-control" placeholder="Full Name" />
            </div>

            <div className="col-md-4 mb-2">
              <input className="form-control" placeholder="Email" />
            </div>

            <div className="col-md-4 mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <div className="col-md-4 mb-2">
              <select className="form-select">
                <option>Select Role</option>
                <option>Sub-Admin</option>
                <option>Moderator</option>
                <option>staff</option>
              </select>
            </div>

            <div className="col-md-4 mb-2">
              <input className="form-control" placeholder="Status" />
            </div>

          </div>

          <button type="button" className="btn btn-primary mt-2">
            Add User
          </button>
        </form>

      </div>

      {/* READ USERS TABLE */}
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
            <tr>
              <td>1</td>
              <td>Ali</td>
              <td>ali@gmail.com</td>
              <td>Sub-Admin</td>
              <td>Active</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Edit
                </button>
                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}