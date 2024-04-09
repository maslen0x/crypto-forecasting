import { api } from "../core/api";
import {
  HistoricalChartParams,
  HistoricalChartResponse,
  HistoricalChartType,
} from "../types/crypto";

export const getHistoricalChart = async (
  type: HistoricalChartType,
  params: HistoricalChartParams
) => {
  const res = await api.get<HistoricalChartResponse>(`/histo${type}`, {
    params,
  });
  return res.data.Data.Data;
};
