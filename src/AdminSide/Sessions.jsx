import React from "react";
import Sidebar from "./Sidebar";

export default function Sessions() {
  return (
    <div style={{display: "flex"}}>
      <Sidebar />

      <div style={{flex: 1}}>
         <h2>AI Study Sessions </h2>

      {/* SEARCH + FILTER UI */}
      <div className="card p-3 mb-4">
        <h5>Search Sessions</h5>

        <div className="row">
          <div className="col-md-4 mb-2">
            <input
              className="form-control"
              placeholder="Search by Session Name"
            />
          </div>

          <div className="col-md-4 mb-2">
            <input
              className="form-control"
              placeholder="Search by User Name"
            />
          </div>

          <div className="col-md-4 mb-2">
            <select className="form-select">
              <option>Filter by Subject</option>
              <option>Physics</option>
              <option>Math</option>
              <option>CS</option>
            </select>
          </div>
        </div>

        <button className="btn btn-primary mt-2">
          Search
        </button>
      </div>

      {/* CREATE SESSION */}
      <div className="card p-3 mb-4">
        <h5>Create Session</h5>
        <button className="btn btn-success">New Session</button>
      </div>

      {/* READ TABLE */}
      <div className="card p-3">
        <h5>All Sessions</h5>

        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Session Name</th>
              <th>User</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Physics Study</td>
              <td>Ali</td>
              <td>Physics</td>
              <td>2026-04-27</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Open
                </button>
                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Math Practice</td>
              <td>Ahmed</td>
              <td>Math</td>
              <td>2026-04-26</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Open
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
     

    </div>
  );
}