import { api } from "../core/api";
import {
  CurrenciesParams,
  CurrenciesResponse,
  OhlcParams,
  OhlcResponse,
  OhlcType,
} from "../types/crypto";

export const getOhlc = async (type: OhlcType, params: OhlcParams) => {
  const res = await api.crypto.get<OhlcResponse>(`/data/v2/histo${type}`, {
    params,
  });
  return res.data.Data.Data;
};

export const getCurrencies = async (params: CurrenciesParams) => {
  const res = await api.crypto.get<CurrenciesResponse>("/data/top/mktcapfull", {
    params,
  });
  return res.data.Data;
};
