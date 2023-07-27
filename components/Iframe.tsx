"use client";

import { useEffect, useState } from "react";
import { Youtube } from "lucide-react";
import { BarLoader } from "react-spinners";

const Iframe = ({ ...rest }) => {
  const [windowWidth, setWindowWidth] = useState(200);
  const [windowExists, setWindowExists] = useState(false);

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
      setWindowExists(true);
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
      {!windowExists ? (
        <div className="h-[143px] w-[250px] flex justify-center items-center bg-stone-800">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Youtube size={50} />
            <div>Loading Video...</div>
            <BarLoader color="#d6d3d1" />
          </div>
        </div>
      ) : (
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
