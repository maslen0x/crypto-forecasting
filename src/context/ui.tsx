import { FC, PropsWithChildren, RefObject, createContext } from "react";
import { useProvideUI } from "../hooks/ui";

export const UIContext = createContext<{
  filtersRef: RefObject<HTMLDivElement>;
  chartRef: RefObject<HTMLDivElement>;
  calculatorRef: RefObject<HTMLDivElement>;
  buyDateRef: RefObject<HTMLDivElement>;
  sellDateRef: RefObject<HTMLDivElement>;
  buyPriceRef: RefObject<HTMLDivElement>;
  sellPriceRef: RefObject<HTMLDivElement>;
  usdDifferenceRef: RefObject<HTMLDivElement>;
  usdCourseRef: RefObject<HTMLDivElement>;
  rubDifferenceRef: RefObject<HTMLDivElement>;
} | null>(null);

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const ui = useProvideUI();

  return <UIContext.Provider value={ui}>{children}</UIContext.Provider>;
};
