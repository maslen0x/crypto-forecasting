import { FC, useMemo } from "react";
import { Col, Row, Skeleton, SkeletonProps, Statistic, Typography } from "antd";
import { getDigitsCount } from "../utils/numbers";
import { LineChartData, OhlcChartData } from "../types/chart";
import { formatDate } from "../utils/date";
import { useUsdCourse } from "../hooks/usd-course";

interface ProfitCalculatorProps {
  current: OhlcChartData[number];
  forecast: LineChartData[number];
}

const skeletonProps: SkeletonProps = {
  active: true,
  paragraph: {
    rows: 0,
  },
};

const ProfitCalculator: FC<ProfitCalculatorProps> = ({ current, forecast }) => {
  const { usdCourse, isLoading } = useUsdCourse();

  const difference = useMemo(() => {
    const digitsCount = getDigitsCount(current.y[3]);
    return Number((forecast.y - current.y[3]).toFixed(digitsCount));
  }, [forecast, current]);

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Typography.Title className="no-margin" level={4}>
          Калькулятор
        </Typography.Title>
      </Col>

      <Col span={12}>
        <Statistic title="Дата покупки" value={formatDate(current.x)} />
      </Col>

      <Col span={12}>
        <Statistic title="Дата продажи" value={formatDate(forecast.x)} />
      </Col>

      <Col span={12}>
        <Statistic title="Стоимость покупки" value={`${current.y[3]}$`} />
      </Col>

      <Col span={12}>
        <Statistic title="Стоимость продажи" value={`${forecast.y}$`} />
      </Col>

      <Col span={12}>
        <Statistic title="Разница" value={`${difference}$`} />
      </Col>

      <Col span={12}>
        <Statistic
          title="Курс доллара США"
          value={`${usdCourse.toFixed(2)}₽`}
          valueRender={(value) => {
            return isLoading ? <Skeleton {...skeletonProps} /> : value;
          }}
        />
      </Col>

      <Col span={12}>
        <Statistic
          title="Разница в рублях"
          value={`${(difference * usdCourse).toFixed(2)}₽`}
          valueRender={(value) => {
            return isLoading ? <Skeleton {...skeletonProps} /> : value;
          }}
        />
      </Col>
    </Row>
  );
};

export default ProfitCalculator;
