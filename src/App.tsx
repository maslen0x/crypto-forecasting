import { FC, useMemo } from "react";
import { Result, Space, Spin } from "antd";
import CurrenciesFilters from "./components/CurrenciesFilters";
import OhlcChart from "./components/OhlcChart";
import { getLineChartData } from "./utils/chart";
import { useOhlcData } from "./hooks/ohlc-data";
import { useFilters } from "./hooks/filters";

const App: FC = () => {
  const { currency, type } = useFilters();
  const { ohlcData, isLoading, isSuccess, isError } = useOhlcData(
    currency,
    type
  );

  const lineData = useMemo(() => {
    return getLineChartData(ohlcData, type);
  }, [ohlcData, type]);

  return (
    <Space className="app" direction="vertical" size="middle">
      <CurrenciesFilters />

      {isLoading && (
        <div className="center">
          <Spin size="large" />
        </div>
      )}

      {isError && (
        <Result
          status="error"
          title="Ошибка при загрузке данных"
          subTitle="Попробуйте позже"
        />
      )}

      {isSuccess && <OhlcChart ohlcData={ohlcData} lineData={lineData} />}
    </Space>
  );
};

export default App;
