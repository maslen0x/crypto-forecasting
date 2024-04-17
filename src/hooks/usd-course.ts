import { useQuery } from "@tanstack/react-query";
import { getUsdCourse } from "../api/bank";

export const useUsdCourse = () => {
  const { data: usdCourse = 0, ...rest } = useQuery({
    queryKey: ["usd"],
    queryFn: async () => await getUsdCourse(),
  });

  return { ...rest, usdCourse };
};
