import { Market, Bet, User } from '../types/market';

export const mockMarkets: Market[] = [
  {
    id: '1',
    question: 'Will Bitcoin reach $100k by end of 2024?',
    description: 'Price must reach $100,000 USD on any major exchange.',
    deadline: new Date('2024-12-31'),
    yesPool: 1500,
    noPool: 2000,
    status: 'active',
    createdAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    question: 'Will SpaceX successfully land on Mars in 2024?',
    description: 'Successful landing of any SpaceX vehicle on Mars surface.',
    deadline: new Date('2024-12-31'),
    yesPool: 3000,
    noPool: 1000,
    status: 'active',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '3',
    question: 'Will GPT-5 be released in 2024?',
    description: 'Official release by OpenAI of a model designated as GPT-5.',
    deadline: new Date('2024-12-31'),
    yesPool: 2500,
    noPool: 2500,
    status: 'resolved',
    outcome: 'no',
    createdAt: new Date('2024-02-01'),
  },
];

export const mockUser: User = {
  id: 'user1',
  balance: 10000,
  bets: [
    {
      id: 'bet1',
      marketId: '1',
      userId: 'user1',
      amount: 500,
      projection: 'yes',
      timestamp: new Date('2024-03-01'),
      resolved: false,
    },
    {
      id: 'bet2',
      marketId: '3',
      userId: 'user1',
      amount: 1000,
      projection: 'yes',
      timestamp: new Date('2024-02-15'),
      resolved: true,
      payout: 0,
    },
  ],
};
