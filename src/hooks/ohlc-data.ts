import { useEffect, useState } from "react";
import { OhlcChartData } from "../types/chart";
import { formatOhlcChartData } from "../utils/chart";
import { getHistoricalChart } from "../api/crypto";

export const useOhlcData = () => {
  const [ohlcData, setOhlcData] = useState<OhlcChartData>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHistoricalChart = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await getHistoricalChart("day", {
          fsym: "BTC",
          tsym: "USD",
          limit: 30,
        });

        setOhlcData(formatOhlcChartData(data));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoricalChart();
  }, []);

  return { ohlcData, loading, error };
};
