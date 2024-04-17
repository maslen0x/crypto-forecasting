import { api } from "../core/api";
import { UsdCourseResponse } from "../types/bank";

export const getUsdCourse = async () => {
  const { data } = await api.bank.get<UsdCourseResponse>("/daily_json.js");
  return data.Valute.USD.Value;
};
