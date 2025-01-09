"use client";
import { getPriceFormat } from "@/utils/getPriceFormat";
import { useEffect, useState } from "react";


type TCurrentPrice = {
  currency: string;
  priceUsd: string;
};

const CurrentPrice = ({ currency, priceUsd }: TCurrentPrice) => {
  const [price, setPrice] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://ws.coincap.io/prices?assets=${currency.toLowerCase()}`
    );
    ws.onopen = () => setIsFetching(true);

    ws.onmessage = (event) => {
      setIsFetching(false);
      const data = JSON.parse(event.data);
      if (data[currency.toLowerCase()]) {
        setIsConnected(true);
        setPrice(data[currency.toLowerCase()]);
      }
    };

    ws.onerror = (error) => {
      setIsFetching(false);
      console.warn(`WebSocket error for ${currency}:`, error);
      setIsConnected(false);
    };

    ws.onclose = () => setIsConnected(false);

    return () => ws.close();
  }, [currency]);

  return (
    <div className="p-4 border border-gray-300 rounded-lg mb-4">
      {isFetching && !isConnected ? (
        <p className="text-lg text-green-600 font-bold">Connecting...</p>
      ) : null}
      {isConnected && price ? (
        <p className="text-lg text-green-600">
          Real Time Price: <strong>${getPriceFormat(price)}</strong>
        </p>
      ) : null}
      {!isConnected && !price && !isFetching ? (
        <p className="text-lg text-gray-500">
          Price: <strong>${getPriceFormat(priceUsd)}</strong>
        </p>
      ) : null}
    </div>
  );
};

export default CurrentPrice;
