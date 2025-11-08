import { mockUsers, currentUser } from './users';
import { mockContests } from './contests';
import { mockBets } from './bets';
import { mockMarketplaceItems } from './marketplace';

export * from './users';
export * from './contests';
export * from './bets';
export * from './marketplace';

export const mockData = {
  users: mockUsers,
  currentUser,
  contests: mockContests,
  bets: mockBets,
  marketplaceItems: mockMarketplaceItems,
};
