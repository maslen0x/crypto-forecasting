import { FC } from "react";
import Chart, { Props as ChartProps } from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ru from "apexcharts/dist/locales/ru.json";
import { LineChartData, OhlcChartData } from "../types/chart";

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

interface OhlcChartProps extends ChartProps {
  ohlcData: OhlcChartData;
  lineData: LineChartData;
  profitData: LineChartData;
}

const OhlcChart: FC<OhlcChartProps> = ({
  ohlcData,
  lineData,
  profitData,
  ...props
}) => (
  <Chart
    {...props}
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
        data: profitData,
      },
    ]}
    type="candlestick"
  />
);

export default OhlcChart;
