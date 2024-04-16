import { useQuery } from "@tanstack/react-query";
import { formatOhlcChartData } from "../utils/chart";
import { getOhlc } from "../api/crypto";
import { OhlcType } from "../types/crypto";

export const useOhlcData = (currency: string, type: OhlcType) => {
  const { data: ohlcData = [], ...rest } = useQuery({
    queryKey: ["ohlc", currency, type],
    queryFn: async () => {
      const data = await getOhlc(type, {
        fsym: currency,
        tsym: "USD",
        limit: 30,
      });
      return formatOhlcChartData(data);
    },
  });

  return { ...rest, ohlcData };
};
