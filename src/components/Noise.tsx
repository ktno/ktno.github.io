import noise from "@/../public/noise.webp";
import Image from "next/image";

const Noise = () => {
  return (
    <div className="w-full h-full z-0">
      <Image src={noise.src} alt="noise" fill objectFit="tile" />
    </div>
  );
};

export default Noise;
