import { FC, useMemo, useState } from "react";
import {
  Button,
  Col,
  Image,
  Row,
  Select,
  Space,
  Tooltip,
  Tour,
  TourStepProps,
} from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import { useCurrencies } from "../hooks/currencies";
import { useFilters } from "../hooks/filters";
import { useUI } from "../hooks/ui";

const CurrenciesFilters: FC = () => {
  const { currencies, isLoading, isError } = useCurrencies();
  const { currency, type, setCurrency, setType } = useFilters();
  const {
    filtersRef,
    chartRef,
    calculatorRef,
    buyDateRef,
    sellDateRef,
    buyPriceRef,
    sellPriceRef,
    usdDifferenceRef,
    usdCourseRef,
    rubDifferenceRef,
  } = useUI();

  const [isOpen, setOpen] = useState(false);

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

  const steps: TourStepProps[] = [
    {
      title: "Фильтры",
      description: "Позволяют выбрать криптовалюту и интервал графика",
      target: filtersRef.current,
    },
    {
      title: "График стоимости криптовалюты",
      description: (
        <>
          <div>
            Свечный график отображает стоимость криптовалюты, где каждая свеча
            равна выбранному интервалу
          </div>
          <div>Синий - прогнозируемая стоимость ARIMA</div>
          <div>Зеленый - наивысшая точка прогноза</div>
        </>
      ),
      target: chartRef.current,
    },
    {
      title: "Калькулятор прибыли",
      description:
        "Позволяют рассчитать возможную прибыль при покупке криптовалюты на текущий момент и продаже в наилучший прогнозируемый момент",
      target: calculatorRef.current,
    },
    {
      title: "Дата покупки",
      description: "Дата покупки криптовалюты на текущий момент",
      target: buyDateRef.current,
    },
    {
      title: "Дата продажи",
      description:
        "Дата продажи криптовалюты в наилучший прогнозируемый момент",
      target: sellDateRef.current,
    },
    {
      title: "Стоимость покупки",
      description: "Стоимость покупки криптовалюты на текущий момент",
      target: buyPriceRef.current,
    },
    {
      title: "Стоимость продажи",
      description:
        "Стоимость продажи криптовалюты в наилучший прогнозируемый момент",
      target: sellPriceRef.current,
    },
    {
      title: "Разница",
      description: "Разница между стоимостью покупки и продажи в долларах США",
      target: usdDifferenceRef.current,
    },
    {
      title: "Курс доллара США",
      description: "Курс доллара США, установленный центральным банком РФ",
      target: usdCourseRef.current,
    },
    {
      title: "Разница в рублях",
      description: "Разница между стоимостью покупки и продажи в рублях",
      target: rubDifferenceRef.current,
    },
  ];

  return (
    <Row align="middle" justify="space-between">
      <Col>
        <Space ref={filtersRef}>
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
      </Col>

      <Col>
        <Tooltip title="Помощь">
          <Button
            shape="circle"
            icon={<QuestionOutlined />}
            onClick={() => setOpen(true)}
          />
        </Tooltip>

        <Tour open={isOpen} onClose={() => setOpen(false)} steps={steps} />
      </Col>
    </Row>
  );
};

export default CurrenciesFilters;
