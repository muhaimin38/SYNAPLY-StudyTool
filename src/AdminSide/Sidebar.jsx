import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: "220px" }}>
      <h4 className="text-center mb-4">Admin Panel</h4>

      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/Dashboard" className="nav-link text-white">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link to ="/Notes" className="nav-link text-white">
            Notes
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Sessions"  className="nav-link text-white">
            Sessions
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Flashcards" className="nav-link text-white">
            Flashcards
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Users"  className="nav-link text-white">
            Users
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Settings" className="nav-link text-white">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
