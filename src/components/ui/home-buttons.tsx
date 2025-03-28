"use client";

import { ArrowRight, Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./button";

const HomeButtons = ({ delay = 1 }: { delay?: number }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // Start animation after the specified delay when component comes into view
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay * 500); // Convert to milliseconds

      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div ref={ref} className="">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={shouldAnimate ? "show" : "hidden"}
        className="mt-5 flex items-center gap-4 "
      >
        <motion.div variants={itemVariants}>
          <Button variant={"ghost"} className="cursor-pointer  group ">
            <Phone
              size={20}
              className="group-hover:-rotate-12 transition-transform text-foreground/80"
            />
            Entre em contato
          </Button>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button
            className=" group cursor-pointer bg-transparent"
            variant={"outline"}
          >
            Comece agora{" "}
            <ArrowRight
              className="group-hover:-rotate-12 transition-transform text-foreground/80"
              size={20}
            />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeButtons;
