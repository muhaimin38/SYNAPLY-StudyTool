export default function Dashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* Stats */}
      <div className="row mt-4">
        <div className="col-md-2">
          <div className="card p-3">Users: 120</div>
        </div>
        <div className="col-md-2">
          <div className="card p-3">Notes: 450</div>
        </div>
        <div className="col-md-2">
          <div className="card p-3">Sessions: 300</div>
        </div>
        <div className="col-md-2">
          <div className="card p-3">Flashcards: 800</div>
        </div>
      </div>

      {/* Activity */}
      <h4 className="mt-5">Recent Activity</h4>
      <ul className="list-group">
        <li className="list-group-item">User created a note</li>
        <li className="list-group-item">New AI session started</li>
      </ul>

      {/* Actions */}
      <div className="mt-4">
        <a href="Notes">
          <button className="btn btn-primary me-2" redirect="">
            New Note
          </button>
        </a>

        <a href="Sessions">
          <button className="btn btn-success">New Session</button>
        </a>
      </div>
    </div>
  );
}
