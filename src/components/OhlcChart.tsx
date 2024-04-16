import { FC, useMemo } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ru from "apexcharts/dist/locales/ru.json";
import { useWindowSize } from "../hooks/window-size";
import { LineChartData, OhlcChartData } from "../types/chart";
import { getProfitChartData } from "../utils/chart";

const options: ApexOptions = {
  chart: {
    id: "ohlc-chart",
    locales: [ru],
    defaultLocale: "ru",
  },
  plotOptions: {
    candlestick: {
      wick: {
        useFillColor: true,
      },
    },
  },
  xaxis: {
    type: "datetime",
  },
  stroke: {
    curve: ["smooth", "smooth", "straight"],
    colors: ["#1677ff", "#1677ff", "#52c41a"],
    width: 2,
  },
};

interface OhlcChartProps {
  ohlcData: OhlcChartData;
  lineData: LineChartData;
}

const OhlcChart: FC<OhlcChartProps> = ({ ohlcData, lineData }) => {
  const { width, height } = useWindowSize();

  const profitChartData = useMemo(() => {
    return getProfitChartData(ohlcData, lineData);
  }, [ohlcData, lineData]);

  return (
    <Chart
      options={options}
      series={[
        {
          name: "OHLC",
          type: "candlestick",
          data: ohlcData,
        },
        {
          name: "Прогноз",
          type: "line",
          data: lineData,
        },
        {
          name: "Профит",
          type: "line",
          data: profitChartData,
        },
      ]}
      type="candlestick"
      width={width - 48}
      height={height - 120}
    />
  );
};

export default OhlcChart;
