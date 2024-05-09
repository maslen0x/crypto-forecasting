import { useContext, useRef } from "react";
import { UIContext } from "../context/ui";

export const useProvideUI = () => {
  const filtersRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const buyDateRef = useRef<HTMLDivElement>(null);
  const sellDateRef = useRef<HTMLDivElement>(null);
  const buyPriceRef = useRef<HTMLDivElement>(null);
  const sellPriceRef = useRef<HTMLDivElement>(null);
  const usdDifferenceRef = useRef<HTMLDivElement>(null);
  const usdCourseRef = useRef<HTMLDivElement>(null);
  const rubDifferenceRef = useRef<HTMLDivElement>(null);

  return {
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
  };
};

export const useUI = () => useContext(UIContext)!;
