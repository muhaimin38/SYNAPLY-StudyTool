import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Flashcards() {
  // form state
  const [data, setData] = useState({
    question: "",
    answer: "",
  });

  // flashcards state
  const [cards, setCards] = useState([
    {
      question: "What is AI?",
      answer: "Artificial Intelligence",
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);

  // handle input
  function handleChange(e) {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  }

  // add / update card
  function handleAddCard() {
    if (editIndex !== null) {
      const updated = [...cards];
      updated[editIndex] = data;
      setCards(updated);
      setEditIndex(null);
    } else {
      setCards([...cards, data]);
    }

    setData({
      question: "",
      answer: "",
    });
  }

  // delete
  function handleDelete(index) {
    setCards(cards.filter((_, i) => i !== index));
  }

  // edit
  function handleEdit(index) {
    setData(cards[index]);
    setEditIndex(index);
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <h2>Flashcards</h2>

        {/* FORM */}
        <div className="card p-3 mb-4">
          <h5>Add Flashcard</h5>

          <input
            className="form-control mb-2"
            placeholder="Question"
            name="question"
            value={data.question}
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            placeholder="Answer"
            name="answer"
            value={data.answer}
            onChange={handleChange}
          />

          <button className="btn btn-success" onClick={handleAddCard}>
            {editIndex !== null ? "Update Card" : "Add Card"}
          </button>
        </div>

        {/* TABLE */}
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
            {cards.map((card, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{card.question}</td>
                <td>{card.answer}</td>

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
  );
}