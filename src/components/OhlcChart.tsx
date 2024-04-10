import { FC } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useWindowWidth } from "../hooks/window-width";
import { LineChartData, OhlcChartData } from "../types/chart";

const options: ApexOptions = {
  chart: {
    id: "ohlc-chart",
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
};

interface OhlcChartProps {
  lineData: LineChartData;
  ohlcData: OhlcChartData;
}

const OhlcChart: FC<OhlcChartProps> = ({ lineData, ohlcData }) => {
  const width = useWindowWidth(0.9);

  return (
    <Chart
      options={options}
      series={[
        {
          name: "ohlc",
          type: "candlestick",
          data: ohlcData,
        },
        {
          name: "line",
          type: "line",
          data: lineData,
        },
      ]}
      type="candlestick"
      width={width}
    />
  );
};

export default OhlcChart;
