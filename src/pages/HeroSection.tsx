import React from "react";
import { Meteors } from "../components/ui/meteors";
import { Input } from "../components/ui/input";
import { Label } from "@radix-ui/react-label";
import { cn } from "../utils/cn";

export function HeroSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="top-0 left-0 w-full h-full dark:bg-grey-800 bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] overflow-hidden">
      {/* this is for the image  */}
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-full md:w-4/5 h-4/5">
          <img
            src="/public/general/Hero.png"
            alt="Home page"
            className="w-full h-full object-cover rounded-lg pb-10"
          />
          <h1 className="absolute top-1/2 left-20 transform -translate-y-1/2 text-white text-4xl font-bold">
            Where to Next ?
          </h1>

          {/* this is for the input  and Search Button */}
          <div className="absolute left-0 bottom-0 p-10 w-full md:w-auto">
    <form className="my-8">
      <div className="flex items-center mb-40">
        <Input
          id="firstname"
          placeholder="TourMate"
          type="text"
          className="w-full md:w-80"
        />
        <button
className="ml-2 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-24 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"          type="submit"
        >
          Search &rarr;
          <BottomGradient />
        </button>
      </div>
    </form>
    </div>
           
        </div>
      </div>
      <Meteors number={20} />
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-full mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
