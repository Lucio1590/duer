import React, { createContext, useContext, useState, useCallback } from "react";
import type { User, Contest, Bet, MarketplaceItem } from "../types";
import { mockData } from "../mock";

interface AppContextType {
  currentUser: User;
  contests: Contest[];
  bets: Bet[];
  marketplaceItems: MarketplaceItem[];
  addContest: (
    contest: Omit<Contest, "id" | "createdAt" | "participants">
  ) => void;
  addBet: (bet: Omit<Bet, "id" | "createdAt" | "participants">) => void;
  addMarketplaceItem: (item: Omit<MarketplaceItem, "id" | "createdAt">) => void;
  updateUserCoins: (amount: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export { AppContext };

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User>(mockData.currentUser);
  const [contests, setContests] = useState<Contest[]>(mockData.contests);
  const [bets, setBets] = useState<Bet[]>(mockData.bets);
  const [marketplaceItems, setMarketplaceItems] = useState<MarketplaceItem[]>(
    mockData.marketplaceItems
  );

  const addContest = useCallback(
    (contestData: Omit<Contest, "id" | "createdAt" | "participants">) => {
      const newContest: Contest = {
        ...contestData,
        id: `c${Date.now()}`,
        participants: 0,
        createdAt: new Date(),
      };
      setContests((prev) => [newContest, ...prev]);
    },
    []
  );

  const addBet = useCallback(
    (betData: Omit<Bet, "id" | "createdAt" | "participants">) => {
      const newBet: Bet = {
        ...betData,
        id: `b${Date.now()}`,
        participants: 0,
        createdAt: new Date(),
      };
      setBets((prev) => [newBet, ...prev]);
    },
    []
  );

  const addMarketplaceItem = useCallback(
    (itemData: Omit<MarketplaceItem, "id" | "createdAt">) => {
      const newItem: MarketplaceItem = {
        ...itemData,
        id: `m${Date.now()}`,
        createdAt: new Date(),
      };
      setMarketplaceItems((prev) => [newItem, ...prev]);
    },
    []
  );

  const updateUserCoins = useCallback((amount: number) => {
    setCurrentUser((prev) => ({
      ...prev,
      coins: prev.coins + amount,
    }));
  }, []);

  const value = {
    currentUser,
    contests,
    bets,
    marketplaceItems,
    addContest,
    addBet,
    addMarketplaceItem,
    updateUserCoins,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
