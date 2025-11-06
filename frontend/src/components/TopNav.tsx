import { NavLink } from "react-router-dom";

export function TopNav() {
  return (
    <nav className="topnav">
      <div className="nav-center">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/members" className="nav-link">Members</NavLink>
        <NavLink to="/settings" className="nav-link">Settings</NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/settings" className="nav-link settings-icon" title="Settings">⚙️</NavLink>
      </div>
    </nav>
  );
}
