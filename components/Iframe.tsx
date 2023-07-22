"use client";

import { useEffect, useState } from "react";

const Iframe = ({ ...rest }) => {
  const [windowWidth, setWindowWidth] = useState(200);

  useEffect(() => {
    const handleWindowResize = () => {
      if (windowWidth < 400) {
        setWindowWidth(window.innerWidth - 40);
      } else {
        setWindowWidth(window.innerWidth - 100);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    if (window !== undefined) {
      if (window.innerWidth < 400) {
        setWindowWidth(window.innerWidth - 40);
      } else {
        setWindowWidth(window.innerWidth - 100);
      }
    }
  }, []);

  const calculatedWidth = windowWidth > 700 ? 700 : windowWidth;

  return (
    <>
      {!window ? null : (
        <iframe
          {...rest}
          width={calculatedWidth}
          height={calculatedWidth * 0.57}
        ></iframe>
      )}
    </>
  );
};

export default Iframe;
