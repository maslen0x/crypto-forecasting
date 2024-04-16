export type OhlcType = "day" | "hour" | "minute";

export interface OhlcParams {
  fsym: string;
  tsym: string;
  limit: number;
}

export interface OhlcItem {
  open: number;
  high: number;
  low: number;
  close: number;
  time: number;
}

export interface OhlcResponse {
  Data: {
    Data: OhlcItem[];
  };
}

export interface CurrenciesParams {
  tsym: string;
  limit: number;
}

export interface Currency {
  CoinInfo: {
    Id: string;
    Name: string;
    FullName: string;
    ImageUrl: string;
  };
}

export interface CurrenciesResponse {
  Data: Currency[];
}
