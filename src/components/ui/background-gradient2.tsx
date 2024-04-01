import { cn } from "../../utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient2 = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 0%",
    },
    animate: {
      backgroundPosition: ["0, 0%", "0% 0%", "0 0%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 0,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "0% 0%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-1xl z-[1] opacity-60 group-hover:opacity-30 blur-xl  transition duration-500",
        " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"


        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "0% 0%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-2xl z-[1]",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#ff0000,transparent),radial-gradient(circle_farthest-side_at_100%_0,#ff3333,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ff6666,transparent),radial-gradient(circle_farthest-side_at_0_0,#ff9999,#990000)]"        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
