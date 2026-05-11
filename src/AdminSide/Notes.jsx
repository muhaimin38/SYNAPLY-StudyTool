import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Notes() {
  // states
  const [note, setNote] = useState("");

  const [notes, setNotes] = useState([
    "Study React Basics",
    "Learn AI concepts",
  ]);

  // handle input
  function handleChange(e) {
    setNote(e.target.value);
  }

  // add note
  function handleAddNote() {
    setNotes([...notes, note]);
    setNote("");
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <h2>Notes Management</h2>

        {/* CREATE UI */}
        <div className="card p-3 mb-4">
          <h5>Add New Note</h5>

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter note"
            value={note}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-success"
            onClick={handleAddNote}
          >
            Add Note
          </button>
        </div>

        {/* READ UI */}
        <div className="card p-3">
          <h5>All Notes</h5>

          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Note</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {notes.map((singleNote, index) => (
                <tr>
                  <td>{index + 1}</td>

                  <td>{singleNote}</td>

                  <td>
                    <button className="btn btn-warning btn-sm me-2">
                      Edit
                    </button>

                    <button className="btn btn-danger btn-sm">
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