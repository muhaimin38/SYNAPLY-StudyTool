import React from "react";

export default function Flashcards() {
  return (
    <div>
      <h2>Flashcards </h2>

      <div className="card p-3 mb-4">
        <h5>Add Flashcard</h5>
        <input className="form-control mb-2" placeholder="Question" />
        <input className="form-control mb-2" placeholder="Answer" />
        <button className="btn btn-success">Add Card</button>
      </div>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>What is AI?</td>
            <td>Artificial Intelligence</td>
            <td>
              <button className="btn btn-warning btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}