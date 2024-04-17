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

  const lastOhlcItem = ohlcData[ohlcData.length - 1];

  const data: LineChartData = [
    {
      x: lastOhlcItem.x,
      y: lastOhlcItem.y[3],
    },
  ];

  const arima = new Arima({ verbose: false });
  arima.train(ohlcData.map((item) => item.y[3]));
  const count = Math.round(ohlcData.length / 3);
  const [forecast] = arima.predict(count);

  const digitsCount = lastOhlcItem.y[3].toString().split(".")[1].length;

  forecast.forEach((number) => {
    const lastItem = data[data.length - 1];
    data.push({
      x: dayjs(lastItem.x).add(1, type).toDate(),
      y: Number(number.toFixed(digitsCount)),
    });
  });

  return data;
};

export const getProfitChartData = (
  ohlcData: OhlcChartData,
  lineData: LineChartData
) => {
  const lastOhlcItem = ohlcData[ohlcData.length - 1];

  const maxLineItem = lineData.reduce((acc, el) => {
    return el.y > acc.y ? el : acc;
  }, lineData[0]);

  if (maxLineItem.y < lastOhlcItem.y[3]) return [];

  return [
    {
      x: lastOhlcItem.x,
      y: lastOhlcItem.y[3],
    },
    maxLineItem,
  ];
};
