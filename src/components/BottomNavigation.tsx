import React from "react";
import { NavLink } from "react-router-dom";

const BottomNavigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-white border-t border-gray-200 py-2 shadow-lg z-30">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs px-4 py-2 transition-colors ${
            isActive ? "text-indigo-600" : "text-gray-600"
          }`
        }
      >
        <div className="text-2xl mb-1">🏠</div>
        <span className="text-[0.7rem]">Home</span>
      </NavLink>

      <NavLink
        to="/marketplace"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs px-4 py-2 transition-colors ${
            isActive ? "text-indigo-600" : "text-gray-600"
          }`
        }
      >
        <div className="text-2xl mb-1">🛒</div>
        <span className="text-[0.7rem]">Market</span>
      </NavLink>

      <NavLink
        to="/create"
        className="flex flex-col items-center relative -top-5"
      >
        <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:bg-indigo-700 transition-colors">
          +
        </div>
      </NavLink>

      <NavLink
        to="/bets"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs px-4 py-2 transition-colors ${
            isActive ? "text-indigo-600" : "text-gray-600"
          }`
        }
      >
        <div className="text-2xl mb-1">🎲</div>
        <span className="text-[0.7rem]">Bets</span>
      </NavLink>

      <div className="flex flex-col items-center text-xs px-4 py-2 text-gray-400 opacity-50 cursor-not-allowed">
        <div className="text-2xl mb-1">👤</div>
        <span className="text-[0.7rem]">Profile</span>
      </div>
    </nav>
  );
};

export default BottomNavigation;
