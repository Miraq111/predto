"use client";

import { User, Market } from "../types/market";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Wallet, TrendingUp } from "lucide-react";

interface UserDashboardProps {
  user: User;
  markets: Market[];
}

export default function UserDashboard({ user, markets }: UserDashboardProps) {
  const getBetOutcome = (bet: any) => {
    const market = markets.find((m) => m.id === bet.marketId);
    if (!market?.outcome) return "Pending";
    if (market.outcome === bet.projection) return "Won";
    return "Lost";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="w-5 h-5" />
          Balance: ${user.balance.toLocaleString()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <h3 className="text-lg font-semibold">Your Bets</h3>
          </div>

          <ScrollArea className="h-[400px] w-full pr-4">
            {user.bets.map((bet) => {
              const market = markets.find((m) => m.id === bet.marketId);
              return (
                <div key={bet.id} className="mb-4 p-4 border rounded-lg">
                  <h4 className="font-medium">{market?.question}</h4>
                  <div className="mt-2 text-sm text-muted-foreground">
                    <div>Amount: ${bet.amount}</div>
                    <div>projection: {bet.projection.toUpperCase()}</div>
                    <div>Status: {getBetOutcome(bet)}</div>
                    {bet.payout !== undefined && (
                      <div>Payout: ${bet.payout}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}
