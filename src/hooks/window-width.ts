import { useCallback, useEffect, useState } from "react";

export const useWindowWidth = (k = 1) => {
  const [width, setWidth] = useState(0);

  const onResize = useCallback(() => {
    setWidth(window.innerWidth * k);
  }, [k]);

  useEffect(() => {
    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return width;
};
