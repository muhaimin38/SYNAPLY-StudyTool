export default function Notes() {
  return (
    <div>

      <h2>Notes Management </h2>

      {/* CREATE UI */}
      <div className="card p-3 mb-4">
        <h5>Add New Note</h5>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter note"
        />
        <button type="submit" className="btn btn-success">Add Note</button>
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
            <tr>
              <td>1</td>
              <td>Study React Basics</td>
              <td>
                {/* UPDATE UI */}
                <button className="btn btn-warning btn-sm me-2">
                  Edit
                </button>

                {/* DELETE UI */}
                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Learn AI concepts</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Edit
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
  );
}