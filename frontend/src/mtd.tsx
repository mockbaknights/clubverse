
import "./styles/components.css";


export default function MTD() {
  const members = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "Diana" },
  ];

  return (
    <div className="page">
      <div className="container">
        {/* Page Title */}
        <h2 className="page-title">Members</h2>

        {/* Row: count + search ABOVE the card */}
        <div className="members-table-header">
          <div className="members-count">1–10 of 1,876</div>
          {/* Sleek search button with icon */}
          <button className="members-search">🔍</button>
        </div>

        {/* Card with column selector + table */}
        <div className="card">
          {/* Row: column selector placeholder */}
          <div className="members-table-header" style={{ justifyContent: "flex-end" }}>
            <div className="column-selector">⚙️</div>
          </div>

          {/* Table */}
          <table className="members-table">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m, i) => (
                <tr key={i}>
                  <td><a href="#">{m.name}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
