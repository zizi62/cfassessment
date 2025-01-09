// TODO: Implement the following API functions:
// - getAssets(): Fetches list of assets from /assets endpoint
// - getAsset(id): Fetches single asset from /assets/{id} endpoint
// - getAssetHistory(id): Fetches price history from /assets/{id}/history endpoint

import { BASE_URL } from "@/utils/constants";

export type Asset = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
  changePercent24Hr: string;
};

export type AssetsResponse = {
  data: Asset[];
  timestamp: number;
};

export type HistoryResponse = {
  priceUsd: string;
  time: number;
  date: string;
};

export const getAssets = async (): Promise<AssetsResponse> => {
  return fetch(`${BASE_URL}/assets`, {
    cache: "force-cache",
    next: {
      revalidate: 10,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const getAsset = async (id: string): Promise<Asset> => {
  return fetch(`${BASE_URL}/assets/${id}`, {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  })
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => {
      console.error(error);
    });
};

export const getAssetHistory = async (
  id: string,
  interval: string
): Promise<HistoryResponse[]> => {
  return fetch(`${BASE_URL}/assets/${id}/history/?interval=${interval}`, {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  })
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => {
      console.error(error);
    });
};
