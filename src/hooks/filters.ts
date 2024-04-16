import { useContext, useState } from "react";
import { FiltersContext } from "../context/filters";
import { OhlcType } from "../types/crypto";

export const useProvideFilters = () => {
  const [currency, setCurrency] = useState("BTC");
  const [type, setType] = useState<OhlcType>("day");

  return {
    currency,
    type,
    setCurrency,
    setType,
  };
};

export const useFilters = () => useContext(FiltersContext)!;
