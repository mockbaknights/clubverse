
import "../styles/layout.css";
import "../styles/components.css";

export default function DashboardFeed() {
  return (
    <div className="page">
      <div className="container">
        <div className="dashboard-feed">
          <h1 className="feed-title">Your Club Dashboard</h1>
          <ul className="feed-list">
            <li>🟢 6 new members joined</li>
            <li>📌 Amanda from frontdesk marked a message as important</li>
            <li>💬 Zoltan Maros wants to chat with you</li>
            <li>🔥 Re: Firedrill procedures</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
