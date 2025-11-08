import React, { useState } from "react";

const Bets: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"available" | "history">(
    "available"
  );

  return (
    <div className="page">
      <h1>Bets</h1>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "available" ? "active" : ""}`}
          onClick={() => setActiveTab("available")}
        >
          Available Bets
        </button>
        <button
          className={`tab ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          Betting History
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "available" ? (
          <div className="available-bets">
            <p>List of available bets will appear here.</p>
            {/* TODO: Implement available bets list */}
          </div>
        ) : (
          <div className="betting-history">
            <p>Your betting history will appear here.</p>
            {/* TODO: Implement betting history */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bets;
