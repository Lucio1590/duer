import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const { currentUser } = useApp();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-indigo-600 text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-indigo-700 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                {currentUser.avatar}
              </div>
              <div>
                <div className="font-semibold">{currentUser.name}</div>
                <div className="text-sm text-indigo-200">
                  {currentUser.email}
                </div>
              </div>
            </div>

            {/* Coins */}
            <div className="mt-4 bg-indigo-700 rounded-lg p-3">
              <div className="text-sm text-indigo-200">Available Coins</div>
              <div className="text-2xl font-bold">💰 {currentUser.coins}</div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <Link
              to="/profile"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            >
              <span className="text-xl">👤</span>
              <span className="font-medium">Profile</span>
            </Link>

            <Link
              to="/my-contests"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            >
              <span className="text-xl">🏆</span>
              <span className="font-medium">My Contests</span>
            </Link>

            <Link
              to="/my-bets"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            >
              <span className="text-xl">🎲</span>
              <span className="font-medium">My Bets</span>
            </Link>

            <Link
              to="/settings"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            >
              <span className="text-xl">⚙️</span>
              <span className="font-medium">Settings</span>
            </Link>

            <div className="border-t border-gray-200 my-4" />

            <Link
              to="/help"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            >
              <span className="text-xl">❓</span>
              <span className="font-medium">Help & Support</span>
            </Link>

            <Link
              to="/about"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors mb-2"
            >
              <span className="text-xl">ℹ️</span>
              <span className="font-medium">About</span>
            </Link>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button className="w-full px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
