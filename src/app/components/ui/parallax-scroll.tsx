"use client";


import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 3 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("overflow-y-hidden mt-24   h-[70rem]  items-center  w-full", className)}
      ref={gridRef}
    >
      <div
        style={{ borderRadius: "50px", boxShadow: "inset 20px 20px 58px #000000",inset: "-20px -20px 58px #ffffff"}}
        className="rounded-xl   z-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10 -z-10 -translate-y-44">
          {firstPart.map((el, idx) => (
            <motion.div
            className=" rounded-3xl "
               // Apply the translateY motion value here
              animate={{translateY:'-96.66%' ,transition:{ease:'linear',duration:6,repeatType:'mirror',repeat:Infinity}}}
              key={"grid-1" + idx}
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10 -z-10">
          {secondPart.map((el, idx) => (
            <motion.div animate={{ translateY: '-86.66%', transition: { ease: 'linear', duration: 6, repeatType: 'mirror', repeat: Infinity } }} key={"grid-2" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10 -translate-y-44 -z-10">
          {thirdPart.map((el, idx) => (
            <motion.div animate={{ translateY: '-96.66%', transition: { ease: 'linear', duration: 6, repeatType: 'mirror', repeat: Infinity } }} key={"grid-3" + idx}>
              <img
                src={el}
                className="overflow-hidden h-80 relative w-full rounded-3xl object-cover object-left-top  gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
              <motion.p  className="hidden text-black border rounded-b-2xl  absolute bottom-0 bg-white/70 p-1 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora inventore repellat aliquam quidem laboriosam accusamus eos autem accusantium cumque, quo ex quis sed in</motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
