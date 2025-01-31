/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { myEasing } from "@/components/Easing";
import { useEffect, useRef, useState } from "react";
import { chivoMono } from "@/components/Fonts";
import TextButton from "@/components/TextButton";

const Landing = () => {
  const ref = useRef(null);
  const [videoWidth, setVideoWidth] = useState<number>(0);
  const [style, setStyle] = useState({
    opacity: 1,
    scale: 1,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setStyle({
      opacity: 1 - latest,
      scale: 1 - latest * 0.1,
    });
  });

  useEffect(() => {
    const windowWidth = window.innerWidth;
    setVideoWidth(windowWidth * 0.36);
  }, []);

  return (
    <>
      {/* GHOST CONTAINER */}
      <motion.div ref={ref} className="relative h-screen w-screen"></motion.div>

      <motion.section
        id="landing"
        style={style}
        className="fixed left-0 top-0 h-screen w-screen overflow-hidden bg-ivory bg-noise bg-repeat"
      >
        {/* LINE */}
        <div className="absolute right-[calc(40vw-2px)] top-0 box-border h-screen w-[1px] border border-dashed border-gray-200" />

        {/* HEADER */}
        <div className="absolute left-0 top-10 z-10 flex w-full items-center justify-between px-10">
          <p className="flex gap-2">
            <span>MARKETING</span>
            <span>//</span>
            <span>MANAGEMENT</span>
            <span>//</span>
            <span>FILM & MEDIA</span>
          </p>

          <ul className="flex gap-6">
            <li>
              <TextButton href="#productions">PRODUCTIONS</TextButton>{" "}
            </li>
            <li>
              <TextButton href="https://www.linkedin.com/in/katie-no/">
                LINKEDIN
              </TextButton>
            </li>
            <li>
              <TextButton href="mailto:ktno.career@gmail.com">
                CONTACT
              </TextButton>
            </li>
          </ul>
        </div>

        {/* HERO TEXT */}
        <motion.div
          initial={{ fontWeight: 0 }}
          animate={{ fontWeight: 500 }}
          transition={{ duration: 1, ease: myEasing }}
          className="absolute left-0 top-0 -z-0 flex h-full w-full flex-nowrap items-center justify-center gap-10 px-8 text-[12vw] leading-none"
        >
          <span className="shrink-0 text-nowrap">KATIE</span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: videoWidth }}
            transition={{ delay: 0.5, duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
            className="inline h-[12vw] overflow-hidden"
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/reel.mp4" type="video/mp4" />
              <source src="/videos/reel.webm" type="video/webm" />
            </video>
          </motion.div>
          <span className="shrink-0 text-nowrap">NO</span>
        </motion.div>

        <div
          className={
            chivoMono.className +
            " absolute bottom-10 left-0 z-10 flex w-full items-end justify-between px-10 leading-tight"
          }
        >
          <p className="w-full sm:w-1/2 md:w-1/3">
            BRINGING STORIES TO LIFE THROUGH CREATIVE STRATEGY AND SEAMLESS
            PROJECT EXECUTION
          </p>
          <ArrowDownwardIcon />
        </div>
      </motion.section>
    </>
  );
};

export default Landing;
