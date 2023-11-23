import { useEffect, useState } from "react";

const getSize = () => ({
  x: window.innerWidth,
  y: window.innerHeight,
});

export const useViewPort = () => {
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // componentWillUnmount
      window.removeEventListener("resize", handleResize);
    };
  }, []); // componentDidMount

  return size;
};
