export interface User {
  id: string;
  name: string;
  email: string;
  coins: number;
  avatar?: string;
  expertise: string[];
  createdAt: Date;
}

export interface Contest {
  id: string;
  title: string;
  description: string;
  category: 'app' | 'design' | 'website' | 'other';
  prize: number;
  creatorId: string;
  creator: User;
  participants: number;
  deadline: Date;
  status: 'open' | 'in-progress' | 'completed' | 'cancelled';
  requirements: string[];
  createdAt: Date;
  imageUrl?: string;
}

export interface Bet {
  id: string;
  title: string;
  description: string;
  category: string;
  odds: number;
  stake: number;
  creatorId: string;
  creator: User;
  participants: number;
  deadline: Date;
  status: 'open' | 'closed' | 'settled';
  createdAt: Date;
}

export interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  type: 'service' | 'product' | 'expertise';
  price: number;
  sellerId: string;
  seller: User;
  category: string;
  status: 'available' | 'sold' | 'pending';
  createdAt: Date;
  imageUrl?: string;
}

export interface UserContest {
  userId: string;
  contestId: string;
  status: 'participating' | 'submitted' | 'winner' | 'loser';
  submissionUrl?: string;
  submittedAt?: Date;
}

export interface UserBet {
  userId: string;
  betId: string;
  amount: number;
  prediction: string;
  status: 'active' | 'won' | 'lost';
  placedAt: Date;
}
