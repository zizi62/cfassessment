import { Asset } from "@/lib/api";
import { fallbacIconkSrc } from "@/utils/constants";
import { getPriceFormat } from "@/utils/getPriceFormat";
import CriptoIcon from "../CriptoIcon";
import CurrentPrice from "../CurrentPrice";

type TCryptoInfo = {
  cryptoInfo: Asset;
};

export const CryptoInfo = (props: TCryptoInfo) => {
  const { changePercent24Hr, name, priceUsd, rank, symbol, id } =
    props.cryptoInfo;

  const changeColor =
    parseFloat(changePercent24Hr) < 0 ? "text-red-600" : "text-green-600";

  const iconUrl = `/icons/${symbol.toLowerCase()}.svg`;

  return (
    <div className="flex items-center justify-between p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center space-x-4">
        <CriptoIcon
          src={iconUrl}
          alt={`${name} icon`}
          width={60}
          height={60}
          fallbackSrc={fallbacIconkSrc}
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">{symbol.toUpperCase()}</p>
        </div>
      </div>
      <CurrentPrice currency={id} priceUsd={priceUsd} />
      <div className="text-right">
        <p className="text-sm text-gray-500">Rank#{rank}</p>
        <p className={`text-sm ${changeColor}`}>
          {getPriceFormat(changePercent24Hr)}%
        </p>
      </div>
    </div>
  );
};

export default CryptoInfo;
