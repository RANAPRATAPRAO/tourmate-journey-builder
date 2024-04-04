import React from "react";
import { Meteors } from "../components/ui/meteors";
import { Input } from "../components/ui/input";
import { Label } from "@radix-ui/react-label";
import { cn } from "../utils/cn";
import { Link,NavLink } from "react-router-dom";

export function HeroSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="dark:bg-grey-800 bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] overflow-hidden">
     {/* for the laptop and medium deviices */}

      <div className=" hidden sm:block">
        {/* this is for the image  */}
        <div className="flex justify-center items-center sm:h-96 lg-96 h-96 mt-10">
          <div className="relative  w-4/5 lg:w-4/5 sm:4/5 md:w-4/5 h-4/5  overflow-hidden">
            <img
              src="general/Hero.png"
              alt="Home page"
              className="w-full h-full object-cover rounded-lg pb-10"
            />
            <h1 className="absolute top-1/2 p-10 transform -translate-y-1/2 text-white text-2xl sm:text-4xl font-bold">
              Where to Next ?
            </h1>

            {/* this is for the input  and Search Button */}
            <div className="absolute left-0 bottom-0 p-10 w-full md:w-auto">
              <form className="my-8">
                <div className="flex">
                  <Input
                    id="firstname"
                    placeholder="TourMate"
                    type="text"
                    className="w-full md:w-80"
                  />
                  <button
                    className="ml-2 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-24 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                  >
                    Search &rarr;
                    <BottomGradient />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" grid grid-cols-3 md:grid-cols-5 sm:grid-cols-4 lg:gird-cols-6 gap-4">
            <Link
              to="#Features"
              className="bg-gray-800 hover:bg-blue-700 text-white font-bold p-2    rounded flex justify-center "
            >
              Features
            </Link>
            <Link
              to="#Features"
              className="bg-gray-800 hover:bg-blue-700 text-white font-bold p-2   rounded flex justify-center "
            >
              Indian States
            </Link>
            <Link
              to="#Features"
              className="bg-gray-800 hover:bg-blue-700 text-white font-bold p-2   rounded flex justify-center "
            >
              Trending Places
            </Link>
            <Link
              to="#Features"
              className="bg-gray-800 hover:bg-blue-700 text-white font-bold p-2   rounded flex justify-center "
            >
              Holiday Plan
            </Link>
          </div>
        </div>
      </div>


{/* for mobile devices  */}

<div className="sm:hidden my-20">
  <h1 className="text-green-200 font-bold text-lg pb-3 ml-12">Tell us what you want to explore.</h1>
  <div className="flex justify-center">
    <div className="grid grid-cols-4 gap-4 mt-6"> {/* Added margin-top for spacing */}
      <Link
        to="#Features"
        className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md flex items-center justify-center text-sm shadow-md border border-transparent hover:border-white transition duration-300"
      >
        Beaches
      </Link>
            <Link
              to="#Features"
              className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md flex items-center justify-center text-xs shadow-md border border-transparent hover:border-white transition duration-300"            >
              Camping
            </Link>
            <Link
              to="#Features"
              className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md flex items-center justify-center text-xs shadow-md border border-transparent hover:border-white transition duration-300"            >
              Hiking
            </Link>
            <Link
              to="#Features"
              className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md flex items-center justify-center text-xs shadow-md border border-transparent hover:border-white transition duration-300"            >
              History
            </Link>
            <Link
              to="#Features"
              className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md flex items-center justify-center text-xs shadow-md border border-transparent hover:border-white transition duration-300"            >
              Food
            </Link>
            <Link
              to="#Features"
              className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md flex items-center justify-center text-xs shadow-md border border-transparent hover:border-white transition duration-300"            >
              Culture
            </Link>
            <Link
              to="#holiday"
              className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md flex items-center justify-center text-xs shadow-md border border-transparent hover:border-white transition duration-300"            >
              Cities
            </Link>
            <Link
              to="#Features"
              className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md flex items-center justify-center text-xs shadow-md border border-transparent hover:border-white transition duration-300"            >
              Holiday
            </Link>
          </div>
          </div>
          </div>

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
