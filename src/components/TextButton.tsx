"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Ref, useState } from "react";
import { myEasing } from "./Easing";
import LocomotiveScroll from "locomotive-scroll";
import useLocomotiveScroll from "./UseLocomotiveScroll";

interface TextButtonProps {
  children: string;
  href: string;
}

const TextButton = ({ children, href }: TextButtonProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const external = href.startsWith("http");

  const scrollRef: Ref<LocomotiveScroll> = useLocomotiveScroll();

  if (external) {
    return (
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative flex h-fit flex-col overflow-hidden"
      >
        <Link
          href={href}
          target={external ? "_blank" : ""}
          rel={external ? "noreferrer" : ""}
        >
          <InnerText hover={hover}>{children}</InnerText>
        </Link>
      </button>
    );
  }

  const scrollToSection = () => {
    scrollRef.current?.scrollTo(href);
  };

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={scrollToSection}
      className="relative flex h-fit flex-col overflow-hidden"
    >
      <InnerText hover={hover}>{children}</InnerText>
    </button>
  );
};

interface InnerTextProps {
  children: string;
  hover: boolean;
}

const InnerText = ({ children, hover }: InnerTextProps) => {
  return (
    <>
      <motion.span
        animate={{
          y: hover ? "-80%" : "0%",
          scale: hover ? 0.7 : 1,
          opacity: hover ? 0 : 1,
        }}
        transition={{ duration: 0.5, ease: myEasing }}
        className="relative block"
      >
        {children}
      </motion.span>
      <motion.span
        animate={{
          y: hover ? "-100%" : "0%",
        }}
        transition={{ duration: 0.5, ease: myEasing }}
        className="absolute top-[100%] block"
      >
        {children}
      </motion.span>
    </>
  );
};

export default TextButton;
