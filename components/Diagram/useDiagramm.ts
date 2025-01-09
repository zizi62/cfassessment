"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getAssetHistory, HistoryResponse } from "@/lib/api";
import { getDate } from "@/utils/getDateFornat";

export const useDiagram = () => {
  const { id } = useParams();
  const [diagramData, setDiagramData] = useState<HistoryResponse[] | []>([]);

  useEffect(() => {
    if (diagramData.length !== 0) return;
    getAssetHistory(String(id), "h1").then((data) => setDiagramData(data));
  }, [diagramData.length, id]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const labels = diagramData.map((data) => getDate(data.date));
  const priceData = diagramData.map((data) => data.priceUsd);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Price history",
        pointRadius: 0,
        data: priceData,
        borderWidth: 2,
        borderColor: "rgb(24, 198, 131)",
        backgroundColor: "rgba(24, 198, 131, 0.5)",
      },
    ],
  };
  return {
    options,
    data,
  };
};
