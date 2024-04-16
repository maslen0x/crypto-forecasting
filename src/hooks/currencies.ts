import { getCurrencies } from "../api/crypto";
import { useQuery } from "@tanstack/react-query";

export const useCurrencies = () => {
  const { data: currencies = [], ...rest } = useQuery({
    queryKey: ["currencies"],
    queryFn: async () => {
      return await getCurrencies({ tsym: "USD", limit: 10 });
    },
  });

  return { ...rest, currencies };
};
