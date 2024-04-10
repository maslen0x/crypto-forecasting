import { FC, useMemo } from "react";
import OhlcChart from "./components/OhlcChart";
import { useOhlcData } from "./hooks/ohlc-data";
import { getLineChartData } from "./utils/chart";

const App: FC = () => {
  const { ohlcData, loading, error } = useOhlcData();

  const lineData = useMemo(() => getLineChartData(ohlcData), [ohlcData]);

  if (error) {
    return "Ошибка при загрузке данных";
  }

  if (loading) {
    return "Загрузка";
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <OhlcChart lineData={lineData} ohlcData={ohlcData} />
    </div>
  );
};

export default App;
