import { FC, PropsWithChildren, createContext } from "react";
import { useProvideFilters } from "../hooks/filters";
import { OhlcType } from "../types/crypto";

export const FiltersContext = createContext<{
  currency: string;
  type: OhlcType;
  setCurrency: (currency: string) => void;
  setType: (type: OhlcType) => void;
} | null>(null);

export const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  const filters = useProvideFilters();

  return (
    <FiltersContext.Provider value={filters}>
      {children}
    </FiltersContext.Provider>
  );
};
