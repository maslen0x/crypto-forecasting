import { FC } from "react";
import { Select, Space } from "antd";
import { useCurrencies } from "../hooks/currencies";
import { useFilters } from "../hooks/filters";

const CurrenciesFilters: FC = () => {
  const { currency, type, setCurrency, setType } = useFilters();
  const { currencies, isLoading, isError } = useCurrencies();

  const currenciesOptions = currencies.map((currency) => ({
    value: currency.CoinInfo.Name,
    label: currency.CoinInfo.FullName,
  }));

  const typeOptions = [
    { value: "day", label: "Дневной" },
    { value: "hour", label: "Часовой" },
    { value: "minute", label: "Минутный" },
  ];

  return (
    <Space>
      <Select
        className="select"
        value={currency}
        onChange={setCurrency}
        options={currenciesOptions}
        loading={isLoading}
        status={isError ? "error" : ""}
      />

      <Select
        className="select"
        value={type}
        onChange={setType}
        options={typeOptions}
      />
    </Space>
  );
};

export default CurrenciesFilters;
