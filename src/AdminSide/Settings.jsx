import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Settings() {
  const [settings, setSettings] = useState({
    apiKey1: "",
    apiKey2: "",
    model: "",
    theme: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setSettings({
      ...settings,
      [name]: value,
    });
  }

  function handleSave() {
    console.log("Saved Settings:", settings);
    alert("Settings Saved!");
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <h2>Settings</h2>

        {/* API SETTINGS */}
        <div className="card p-3 mb-4">
          <h5>API Configuration</h5>

          <input
            className="form-control mb-2"
            placeholder="OpenAI API Key"
            name="apiKey1"
            value={settings.apiKey1}
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            placeholder="Other API Key"
            name="apiKey2"
            value={settings.apiKey2}
            onChange={handleChange}
          />
        </div>

        {/* AI MODEL SETTINGS */}
        <div className="card p-3 mb-4">
          <h5>AI Model Settings</h5>

          <select
            className="form-select mb-2"
            name="model"
            value={settings.model}
            onChange={handleChange}
          >
            <option value="">Select AI Model</option>
            <option>GPT-4</option>
            <option>GPT-3.5</option>
            <option>Custom Model</option>
          </select>
        </div>

        {/* THEME SETTINGS */}
        <div className="card p-3 mb-4">
          <h5>Theme Settings</h5>

          <select
            className="form-select mb-2"
            name="theme"
            value={settings.theme}
            onChange={handleChange}
          >
            <option value="">Select Theme</option>
            <option>Light</option>
            <option>Dark</option>
            <option>Blue</option>
          </select>

          <button className="btn btn-primary" onClick={handleSave}>
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}