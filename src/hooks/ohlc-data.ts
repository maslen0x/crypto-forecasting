import { useEffect, useState } from "react";
import { OhlcChartData } from "../types/chart";
import { formatOhlcChartData } from "../utils/chart";
import { getHistoricalChart } from "../api/crypto";

export const useOhlcData = () => {
  const [ohlcData, setOhlcData] = useState<OhlcChartData>([]);

  useEffect(() => {
    const fetchHistoricalChart = async () => {
      const ohlcData = formatOhlcChartData(
        await getHistoricalChart("day", {
          fsym: "BTC",
          tsym: "USD",
          limit: 30,
        })
      );

      setOhlcData(ohlcData);
    };

    fetchHistoricalChart();
  }, []);

  return ohlcData;
};
