import React from "react";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const stats = [
    { title: "Users", value: 120 },
    { title: "Notes", value: 450 },
    { title: "Sessions", value: 300 },
    { title: "Flashcards", value: 800,},
  ];

  const activities = [
    "User created a note",
    "New AI session started",
    
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Admin Dashboard</h2>

        {/* Stats */}
        <div className="row mt-4">
          {stats.map((stat) => (
            <div className="col-md-2">
              <div className="card p-3">
                {stat.title}: {stat.value}:{stat.hi}
              </div>
            </div>
          ))}
        </div>

        {/* Activity */}
        <h4 className="mt-5">Recent Activity</h4>

        <ul className="list-group">
          {activities.map((activity) => (
            <li className="list-group-item">{activity}</li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-4">
          <a href="Notes">
            <button className="btn btn-primary me-2">
              New Note
            </button>
          </a>

          <a href="Sessions">
            <button className="btn btn-success">
              New Session
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}