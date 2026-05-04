import React from "react";

export default function Settings() {
  return (
    <div>

      <h2>Settings</h2>

      {/* API SETTINGS */}
      <div className="card p-3 mb-4">
        <h5>API Configuration</h5>

        <input
          className="form-control mb-2"
          placeholder="OpenAI API Key"
        />

        <input
          className="form-control mb-2"
          placeholder="Other API Key"
        />

        <button className="btn btn-primary">
          Save API Keys
        </button>
      </div>

      {/* AI MODEL SETTINGS */}
      <div className="card p-3 mb-4">
        <h5>AI Model Settings</h5>

        <select className="form-select mb-2">
          <option>Select AI Model</option>
          <option>GPT-4</option>
          <option>GPT-3.5</option>
          <option>Custom Model</option>
        </select>

        <button className="btn btn-success">
          Update Model
        </button>
      </div>

      {/* THEME SETTINGS */}
      <div className="card p-3 mb-4">
        <h5>Theme Settings</h5>

        <select className="form-select mb-2">
          <option>Select Theme</option>
          <option>Light</option>
          <option>Dark</option>
          <option>Blue</option>
        </select>

        <button className="btn btn-warning">
          Save Theme
        </button>
      </div>

    </div>
  );
}