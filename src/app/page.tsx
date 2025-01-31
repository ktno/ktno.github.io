"use client";

import Productions from "@/sections/Productions/Productions";
import Landing from "@/sections/Landing/Landing";
import useLocomotiveScroll from "@/components/UseLocomotiveScroll";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollRef = useLocomotiveScroll();

  return (
    <main className="">
      <Landing />
      <Productions />
    </main>
  );
}
