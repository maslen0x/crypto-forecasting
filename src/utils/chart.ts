import { LineChartData, OhlcChartData } from "../types/chart";
import { HistoricalChartItem } from "../types/crypto";
import { addDays } from "./date";
import Arima from "arima";

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

  const arima = new Arima({ verbose: false });
  arima.train(ohlcData.map((item) => item.y[3]));
  const count = Math.round(ohlcData.length / 3);
  const [forecast] = arima.predict(count);

  forecast.forEach((number) => {
    const lastOhlcItem = initialData[initialData.length - 1];
    initialData.push({
      x: addDays(lastOhlcItem.x, 1),
      y: Math.round(number),
    });
  });

  return initialData;
};
