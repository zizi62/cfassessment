import CryptoInfo from "@/components/CriptoInfo";
import { Diagram } from "@/components/Diagram";
import { getAsset } from "@/lib/api";

type TGenerateMetadata = {
  params: Promise<{ id: string }>;
};

type TAssetPage = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: TGenerateMetadata) => {
  const { id } = await params;
  return {
    title: `${id.toUpperCase()}`,
    description: `This is the detail page for the "${id}".`,
  };
};

export default async function AssetPage({ params }: TAssetPage) {
  const { id } = await params;
  const asset = await getAsset(id);

  return (
    <main className="p-4">
      <div className="p-4 border rounded-lg">
        <CryptoInfo cryptoInfo={asset} />
        <div className="p-6">
          <Diagram />
        </div>
      </div>
    </main>
  );
}
