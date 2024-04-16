import { FC, useMemo } from "react";
import { Image, Select, Space } from "antd";
import { useCurrencies } from "../hooks/currencies";
import { useFilters } from "../hooks/filters";

const CurrenciesFilters: FC = () => {
  const { currency, type, setCurrency, setType } = useFilters();
  const { currencies, isLoading, isError } = useCurrencies();

  const currenciesOptions = useMemo(() => {
    return currencies.map((currency) => ({
      value: currency.CoinInfo.Name,
      label: currency.CoinInfo.FullName,
      image: currency.CoinInfo.ImageUrl,
    }));
  }, [currencies]);

  const typeOptions = [
    { value: "day", label: "Дневной" },
    { value: "hour", label: "Часовой" },
    { value: "minute", label: "Минутный" },
  ];

  return (
    <Space>
      <Select
        style={{ width: 160 }}
        value={currency}
        onChange={setCurrency}
        options={currenciesOptions}
        loading={isLoading}
        status={isError ? "error" : ""}
        optionRender={(option) => (
          <Space>
            <Image
              width={20}
              src={`https://www.cryptocompare.com/${option.data.image}`}
            />

            {option.data.label}
          </Space>
        )}
      />

      <Select
        style={{ width: 120 }}
        value={type}
        onChange={setType}
        options={typeOptions}
      />
    </Space>
  );
};

export default CurrenciesFilters;
