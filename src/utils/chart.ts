import { LineChartData, OhlcChartData } from "../types/chart";
import { HistoricalChartItem } from "../types/crypto";
import { addDays } from "./date";
import { getRandomArray } from "./random";

export const formatOhlcChartData = (data: HistoricalChartItem[]) => {
  return data.map<OhlcChartData[number]>((item) => ({
    x: new Date(item.time * 1000),
    y: [item.open, item.high, item.low, item.close],
  }));
};

export const getLineChartData = (ohlcData: OhlcChartData) => {
  if (!ohlcData.length) return [];

  const initialData: LineChartData = ohlcData.map((item) => ({
    x: item.x,
    y: null,
  }));

  const randomNumbers = getRandomArray(initialData.length, 60000, 80000);

  randomNumbers.forEach((number) => {
    const lastOhlcItem = initialData[initialData.length - 1];
    initialData.push({
      x: addDays(lastOhlcItem.x, 1),
      y: number,
    });
  });

  initialData[ohlcData.length].y = ohlcData[ohlcData.length - 1].y[3];

  return initialData;
};
