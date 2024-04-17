import { FC, useMemo } from "react";
import { Col, Result, Row, Space, Spin } from "antd";
import CurrenciesFilters from "./components/CurrenciesFilters";
import OhlcChart from "./components/OhlcChart";
import { getLineChartData, getProfitChartData } from "./utils/chart";
import { useOhlcData } from "./hooks/ohlc-data";
import { useFilters } from "./hooks/filters";
import { useWindowSize } from "./hooks/window-size";
import ProfitCalculator from "./components/ProfitCalculator";

const App: FC = () => {
  const { currency, type } = useFilters();
  const { width, height } = useWindowSize();

  const { ohlcData, isLoading, isSuccess, isError } = useOhlcData(
    currency,
    type
  );

  const lineData = useMemo(() => {
    return getLineChartData(ohlcData, type);
  }, [ohlcData, type]);

  const profitData = useMemo(() => {
    return getProfitChartData(ohlcData, lineData);
  }, [ohlcData, lineData]);

  return (
    <Space className="app full-width" direction="vertical" size="middle">
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

      {isSuccess && (
        <Row className="full-width" gutter={24} wrap={false}>
          <Col>
            <OhlcChart
              ohlcData={ohlcData}
              lineData={lineData}
              profitData={profitData}
              width={width - 500}
              height={height - 120}
            />
          </Col>

          <Col flex="1 1 auto">
            <ProfitCalculator
              current={ohlcData[ohlcData.length - 1]}
              forecast={profitData[profitData.length - 1]}
            />
          </Col>
        </Row>
      )}
    </Space>
  );
};

export default App;
