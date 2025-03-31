"use client";

import { useState } from "react";
import { mockMarkets, mockUser } from "../data/mockData";
import MarketCard from "../components/MarketCard";
import UserDashboard from "../components/UserDashboard";
import CreateMarketDialog from "../components/CreateMarketDialog";
import { Market, User } from "../types/market";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MarketsPage() {
  const [markets, setMarkets] = useState<Market[]>(mockMarkets);
  const [user, setUser] = useState<User>(mockUser);

  const handlePlaceBet = (
    marketId: string,
    projection: "yes" | "no",
    amount: number
  ) => {
    setUser((prev) => ({
      ...prev,
      balance: prev.balance - amount,
      bets: [
        ...prev.bets,
        {
          id: `bet${Date.now()}`,
          marketId,
          userId: prev.id,
          amount,
          projection,
          timestamp: new Date(),
          resolved: false,
        },
      ],
    }));

    setMarkets((prev) =>
      prev.map((market) =>
        market.id === marketId
          ? {
              ...market,
              yesPool:
                projection === "yes" ? market.yesPool + amount : market.yesPool,
              noPool:
                projection === "no" ? market.noPool + amount : market.noPool,
            }
          : market
      )
    );
  };

  const handleCreateMarket = (marketData: {
    question: string;
    description: string;
    deadline: Date;
  }) => {
    const newMarket: Market = {
      id: `market${Date.now()}`,
      question: marketData.question,
      description: marketData.description,
      deadline: marketData.deadline,
      yesPool: 0,
      noPool: 0,
      status: "active",
      createdAt: new Date(),
    };

    setMarkets((prev) => [...prev, newMarket]);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Predto</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <CreateMarketDialog onCreateMarket={handleCreateMarket} />
            </div>

            <Tabs defaultValue="active" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="active">Active Markets</TabsTrigger>
                <TabsTrigger value="resolved">Resolved Markets</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-4">
                {markets
                  .filter((market) => market.status === "active")
                  .map((market) => (
                    <MarketCard
                      key={market.id}
                      market={market}
                      onPlaceBet={handlePlaceBet}
                    />
                  ))}
              </TabsContent>

              <TabsContent value="resolved" className="space-y-4">
                {markets
                  .filter((market) => market.status === "resolved")
                  .map((market) => (
                    <MarketCard
                      key={market.id}
                      market={market}
                      onPlaceBet={handlePlaceBet}
                    />
                  ))}
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <UserDashboard user={user} markets={markets} />
          </div>
        </div>
      </div>
    </main>
  );
}
