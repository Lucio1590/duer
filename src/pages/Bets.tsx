import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { BetCard } from "../components/BetCard";

const Bets: React.FC = () => {
  const { bets } = useApp();
  const [activeTab, setActiveTab] = useState<"available" | "history">(
    "available"
  );

  const availableBets = bets.filter((bet) => bet.status === "open");
  const closedBets = bets.filter((bet) => bet.status !== "open");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Bets</h1>
        <p className="text-sm text-gray-600">
          Place your bets on future events
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-[57px] z-10">
        <div className="flex gap-2 p-2">
          <button
            onClick={() => setActiveTab("available")}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              activeTab === "available"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Available ({availableBets.length})
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              activeTab === "history"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            History ({closedBets.length})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "available" ? (
          <div>
            {availableBets.length > 0 ? (
              availableBets.map((bet) => <BetCard key={bet.id} bet={bet} />)
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎲</div>
                <p className="text-gray-500">No available bets at the moment</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            {closedBets.length > 0 ? (
              closedBets.map((bet) => <BetCard key={bet.id} bet={bet} />)
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-500">No betting history yet</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bets;
