import { Asset } from "@/lib/api";

import CriptoIcon from "../CriptoIcon";
import { fallbacIconkSrc } from "@/utils/constants";
import { getPriceFormat } from "@/utils/getPriceFormat";

type TCryptoCard = {
  cardInfo: Asset;
};

export const CryptoCard = (props: TCryptoCard) => {
  const { name, rank, symbol, priceUsd } = props.cardInfo;

  const iconUrl = `/icons/${symbol.toLowerCase()}.svg`;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center  mb-4">
          <CriptoIcon
            src={iconUrl}
            alt={`${name} icon`}
            width={50}
            height={50}
            fallbackSrc={fallbacIconkSrc}
          />
          <p className="ml-4 text-sm font-medium text-gray-500">
            Rank#{" "}
            <span className="text-lg font-semibold text-gray-700">{rank}</span>
          </p>
        </div>
        <div className="text-end">
          <h2 className="text-xl font-medium text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">{symbol}</p>
        </div>
      </div>
      <p className="text-base font-semibold text-green-500 mt-2 text-center">
        ${getPriceFormat(priceUsd)}
      </p>
    </div>
  );
};
