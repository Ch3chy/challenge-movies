import { useEffect, useState } from "react";

export const useResponsiveRowHeight = () => {
  const getRowHeight = () => {
    const width = window.innerWidth;
    if (width < 768) return 140;
    return 200;
  };

  const [rowHeight, setRowHeight] = useState(getRowHeight());

  useEffect(() => {
    const onResize = () => setRowHeight(getRowHeight());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return rowHeight;
};
