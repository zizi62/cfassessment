import { Metadata } from "next";
import Link from "next/link";
import { CryptoCard } from "@/components/CriptoCard";
import { getAssets } from "@/lib/api";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rates",
};

export default async function RatesPage() {
  const rates = await getAssets();
  const date = new Date(rates.timestamp);
  const dateFormat = date.toLocaleString();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Rates</h1>
      <span className=" text-gray-800">
        <strong>Time: </strong>
        {dateFormat}
      </span>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {rates.data.map((rate) => {
          return (
            <Link href={`/rates/${rate.id}`} key={rate.id}>
              <CryptoCard cardInfo={rate} />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
