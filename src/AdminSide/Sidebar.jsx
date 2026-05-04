export default function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: "220px" }}>
      <h4 className="text-center mb-4">Admin Panel</h4>

      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            Dashboard
          </a>
        </li>

        <li className="nav-item">
          <a href="/notes" className="nav-link text-white">
            Notes
          </a>
        </li>

        <li className="nav-item">
          <a href="/sessions" className="nav-link text-white">
            Sessions
          </a>
        </li>

        <li className="nav-item">
          <a href="/flashcards" className="nav-link text-white">
            Flashcards
          </a>
        </li>

        <li className="nav-item">
          <a href="/users" className="nav-link text-white">
            Users
          </a>
        </li>

        <li className="nav-item">
          <a href="/settings" className="nav-link text-white">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}
