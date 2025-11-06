

import "../styles/layout.css";

export default function SettingsLayout() {
  return (
    <div className="settings-layout">
      <aside className="settings-nav">
        <ul>
          <li>Profile</li>
          <li>Notifications</li>
          <li>Security</li>
          <li>Club Settings</li>
        </ul>
      </aside>
      <main className="settings-content">
        <h1>Settings</h1>
        <p>This is where your settings content will go.</p>
      </main>
    </div>
  );
}
