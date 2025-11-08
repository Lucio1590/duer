import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { ContestCard } from "../components/ContestCard";
import { BetCard } from "../components/BetCard";
import { MarketplaceCard } from "../components/MarketplaceCard";

const Home: React.FC = () => {
  const { contests, bets, marketplaceItems } = useApp();
  const [activeTab, setActiveTab] = useState<
    "contests" | "bets" | "marketplace"
  >("contests");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Welcome to Duer</h1>
        <p className="text-indigo-100">
          Earn coins with your skills, create contests, and bet on the future
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-[57px] z-10">
        <div className="flex gap-1 p-2">
          <button
            onClick={() => setActiveTab("contests")}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              activeTab === "contests"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Contests
          </button>
          <button
            onClick={() => setActiveTab("bets")}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              activeTab === "bets"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Bets
          </button>
          <button
            onClick={() => setActiveTab("marketplace")}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              activeTab === "marketplace"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Market
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "contests" && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900">
              Active Contests
            </h2>
            {contests.map((contest) => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        )}

        {activeTab === "bets" && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900">
              Available Bets
            </h2>
            {bets.map((bet) => (
              <BetCard key={bet.id} bet={bet} />
            ))}
          </div>
        )}

        {activeTab === "marketplace" && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900">
              Marketplace
            </h2>
            {marketplaceItems.map((item) => (
              <MarketplaceCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
