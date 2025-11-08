import React from "react";
import type { Bet } from "../types";

interface BetCardProps {
  bet: Bet;
  onClick?: () => void;
}

export const BetCard: React.FC<BetCardProps> = ({ bet, onClick }) => {
  const daysLeft = Math.ceil(
    (bet.deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            {bet.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              {bet.creator.avatar} {bet.creator.name}
            </span>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            bet.status === "open"
              ? "bg-green-100 text-green-800"
              : bet.status === "closed"
              ? "bg-gray-100 text-gray-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {bet.status}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {bet.description}
      </p>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="bg-indigo-50 rounded-lg p-2">
          <div className="text-xs text-gray-600">Odds</div>
          <div className="text-lg font-bold text-indigo-600">{bet.odds}x</div>
        </div>
        <div className="bg-green-50 rounded-lg p-2">
          <div className="text-xs text-gray-600">Stake</div>
          <div className="text-lg font-bold text-green-600">{bet.stake} 💰</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">
          👥 {bet.participants} participants
        </span>
        <span
          className={`text-xs ${
            daysLeft <= 30 ? "text-red-600 font-semibold" : "text-gray-500"
          }`}
        >
          {daysLeft > 0 ? `${daysLeft}d left` : "Ended"}
        </span>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
          {bet.category}
        </span>
      </div>
    </div>
  );
};
