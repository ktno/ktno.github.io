"use client";

import { chivoMono } from "@/components/Fonts";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { myEasing } from "@/components/Easing";
import data from "@/data/productions.json";
import Image from "next/image";

const Productions = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <section
      id="productions"
      className="relative flex w-screen bg-black bg-repeat"
    >
      {/* LEFT */}
      <div className="relative w-[60vw] shrink-0">
        <div className="sticky left-0 top-0 z-0 h-screen w-full">
          <Image
            src={data[currentIndex].media.images[0]}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-[#10100F66] bg-noise"></div>
        </div>
        <div className="relative -top-[100vh] flex flex-col">
          {data.map((item, index) => (
            <ProductionCard
              key={index}
              index={index}
              item={item}
              setCurrentIndex={setCurrentIndex}
            />
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between bg-noise p-10">
        {/* LIST */}

        <ul className="relative flex flex-col gap-4 pl-5">
          <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300">
            <motion.div
              animate={{ y: (24 + 16) * currentIndex }}
              transition={{ duration: 0.5, ease: myEasing }}
              className="h-6 w-[3px] bg-white"
            />
          </div>
          {data.map((item, index) => (
            <motion.li
              key={index}
              animate={{
                fontWeight: index === currentIndex ? 600 : 400,
                color: index === currentIndex ? "#FFFFFF" : "#808080",
              }}
              className={chivoMono.className + " text-white"}
            >
              <span className="mr-8">
                N.{String(index + 1).padStart(2, "0")}
              </span>
              {item.title.toUpperCase()}
            </motion.li>
          ))}
        </ul>

        <div>
          <motion.button
            whileHover={{ opacity: 0.6, paddingRight: 10 }}
            className="mb-10 flex w-full items-center justify-between border-b border-gray-300 py-5 text-lg text-gray-100"
          >
            View more
            <ArrowForwardIosIcon />
          </motion.button>

          {/* TITLE */}
          <h3 className="text-7xl font-medium text-white">
            {data[currentIndex].title.toUpperCase()}
          </h3>
        </div>
      </div>
    </section>
  );
};

interface ProductionCardProps {
  item: { title: string; description: string };
  index: number;
  setCurrentIndex: (index: number) => void;
}

const ProductionCard = ({
  item,
  index,
  setCurrentIndex,
}: ProductionCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (inView) {
      setCurrentIndex(index);
    }
  }, [inView, index, setCurrentIndex]);

  return (
    <div
      ref={ref}
      className="relative z-10 flex h-screen w-full items-center justify-center"
    >
      <div className="h-[22.5vw] w-[40vw] bg-black"></div>
    </div>
  );
};

export default Productions;
