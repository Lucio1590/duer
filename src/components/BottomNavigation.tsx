import React from "react";
import { NavLink } from "react-router-dom";

const BottomNavigation: React.FC = () => {
  return (
    <nav className="bottom-navigation">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <div className="nav-icon">🏠</div>
        <span className="nav-label">Home</span>
      </NavLink>

      <NavLink
        to="/bets"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <div className="nav-icon">🎲</div>
        <span className="nav-label">Bets</span>
      </NavLink>

      <NavLink to="/create" className="nav-item create-button">
        <div className="nav-icon create-icon">+</div>
      </NavLink>

      <div className="nav-item disabled">
        <div className="nav-icon">📊</div>
        <span className="nav-label">Stats</span>
      </div>

      <div className="nav-item disabled">
        <div className="nav-icon">👤</div>
        <span className="nav-label">Profile</span>
      </div>
    </nav>
  );
};

export default BottomNavigation;
