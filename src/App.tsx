import { FC } from "react";
import { Space } from "antd";
import CurrenciesFilters from "./components/CurrenciesFilters";
import OhlcChart from "./components/OhlcChart";
import { getLineChartData } from "./utils/chart";
import { useOhlcData } from "./hooks/ohlc-data";
import { useFilters } from "./hooks/filters";

const App: FC = () => {
  const { currency, type } = useFilters();
  const { ohlcData, isLoading, isError } = useOhlcData(currency, type);

  const lineData = getLineChartData(ohlcData, type);

  if (isError) {
    return "Ошибка при загрузке данных";
  }

  if (isLoading) {
    return "Загрузка";
  }

  return (
    <Space className="app" direction="vertical" size="middle">
      <CurrenciesFilters />

      <OhlcChart lineData={lineData} ohlcData={ohlcData} />
    </Space>
  );
};

export default App;
