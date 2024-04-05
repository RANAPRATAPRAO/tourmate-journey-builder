import { cn } from "../../utils/cn";
import React from "react";

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-8xl ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BentoGrid;

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-gray-800 dark:border-white/[0.2] bg-gray-800 border border-transparent justify-between flex flex-col space-y-4 h-80",
        className
      )}
    >
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-black from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">

        <img
          src={header}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt="temple"
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-blue-300 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-bold text-neutral-600 text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
