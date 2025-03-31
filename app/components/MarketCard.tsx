"use client";

import { Market } from "../types/market";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { Coins, Timer } from "lucide-react";

interface MarketCardProps {
  market: Market;
  onPlaceBet: (
    marketId: string,
    projection: "yes" | "no",
    amount: number
  ) => void;
}

export default function MarketCard({ market, onPlaceBet }: MarketCardProps) {
  const [betAmount, setBetAmount] = useState(100);
  const totalPool = market.yesPool + market.noPool;
  const yesPercentage = (market.yesPool / totalPool) * 100 || 0;

  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{market.question}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground mt-2">
          <Timer className="w-4 h-4 mr-2" />
          {market.status === "active"
            ? `Ends ${formatDistanceToNow(market.deadline, {
                addSuffix: true,
              })}`
            : `Resolved: ${market.outcome?.toUpperCase()}`}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {market.description}
        </p>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">
                Yes ({yesPercentage.toFixed(1)}%)
              </span>
              <span className="text-sm font-medium">
                No ({(100 - yesPercentage).toFixed(1)}%)
              </span>
            </div>
            <Progress value={yesPercentage} className="h-2" />
          </div>

          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4" />
            <span className="text-sm">
              Total Pool: ${totalPool.toLocaleString()}
            </span>
          </div>

          {market.status === "active" && (
            <div className="flex gap-2 mt-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => onPlaceBet(market.id, "yes", betAmount)}
              >
                Bet Yes
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => onPlaceBet(market.id, "no", betAmount)}
              >
                Bet No
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
