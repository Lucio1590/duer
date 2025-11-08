import React from "react";
import type { Contest } from "../types";

interface ContestCardProps {
  contest: Contest;
  onClick?: () => void;
}

export const ContestCard: React.FC<ContestCardProps> = ({
  contest,
  onClick,
}) => {
  const daysLeft = Math.ceil(
    (contest.deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-4xl">{contest.imageUrl || "🎯"}</span>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900 mb-1">
              {contest.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                {contest.creator.avatar} {contest.creator.name}
              </span>
            </div>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            contest.status === "open"
              ? "bg-green-100 text-green-800"
              : contest.status === "in-progress"
              ? "bg-blue-100 text-blue-800"
              : contest.status === "completed"
              ? "bg-gray-100 text-gray-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {contest.status}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {contest.description}
      </p>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-indigo-600">
            💰 {contest.prize} coins
          </span>
          <span className="text-gray-500">
            👥 {contest.participants} participants
          </span>
        </div>
        <span
          className={`text-xs ${
            daysLeft <= 3 ? "text-red-600 font-semibold" : "text-gray-500"
          }`}
        >
          {daysLeft > 0 ? `${daysLeft}d left` : "Ended"}
        </span>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
          {contest.category}
        </span>
      </div>
    </div>
  );
};
