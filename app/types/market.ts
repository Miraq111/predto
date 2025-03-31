export interface Market {
  id: string;
  question: string;
  description: string;
  deadline: Date;
  yesPool: number;
  noPool: number;
  status: 'active' | 'resolved';
  outcome?: 'yes' | 'no';
  createdAt: Date;
}

export interface Bet {
  id: string;
  marketId: string;
  userId: string;
  amount: number;
  projection: 'yes' | 'no';
  timestamp: Date;
  resolved: boolean;
  payout?: number;
}

export interface User {
  id: string;
  balance: number;
  bets: Bet[];
}
