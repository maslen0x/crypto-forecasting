export type HistoricalChartType = "day" | "hour" | "minute";

export interface HistoricalChartParams {
  fsym: string;
  tsym: string;
  limit: number;
}

export interface HistoricalChartItem {
  open: number;
  high: number;
  low: number;
  close: number;
  time: number;
}

export interface HistoricalChartResponse {
  Data: {
    Data: HistoricalChartItem[];
  };
}
