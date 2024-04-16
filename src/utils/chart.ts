import Arima from "arima";
import dayjs from "dayjs";
import { LineChartData, OhlcChartData } from "../types/chart";
import { OhlcItem, OhlcType } from "../types/crypto";

export const formatOhlcChartData = (data: OhlcItem[]) => {
  return data.map<OhlcChartData[number]>((item) => ({
    x: new Date(item.time * 1000),
    y: [item.open, item.high, item.low, item.close],
  }));
};

export const getLineChartData = (ohlcData: OhlcChartData, type: OhlcType) => {
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
      x: dayjs(lastOhlcItem.x).add(1, type).toDate(),
      y: number,
    });
  });

  return initialData;
};
