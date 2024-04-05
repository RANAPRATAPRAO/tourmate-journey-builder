"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { BackgroundGradient } from "../components/ui/background-gradient";

export function ParticularPlaces() {
  return (
    <div className="h-fit dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <div className="grid grid-cols-1 py-20 px-20  gap-y-20  justify-center overflow-hidden">
        {dummyContent.map((feature, index) => (
          <div key={`content-${index}`} className="flex justify-center">
            <BackgroundGradient className=" rounded-[10px]  bg-gray-500 dark:bg-gray-800  ">
              <div className="flex justify-center ">
                <div className="grid grid-cols-12 gap-4 mb-20 ml-10">
                  <div className="col-span-3">
                  <img
                    src={feature.image}
                    alt="jordans"
                    style={{
                      width: "90%",
                      height: "80%",
                      objectFit: "cover",
                    }}
                    className="my-20 mx-auto rounded-lg"
                  />
                  </div>
                  <div className="col-span-3 flex justify-center pt-20">
                  <p className= "my-20 mx-auto text-green-200 ">
                    {feature.description}
                  </p>
                  </div>
                  <div className="col-span-6 flex flex-col justify-end gap-2 my-auto mx-auto ">
                  <p className="my-30 mx-auto text-green-300 font-bold">
                    {feature.title}
                  </p>
                  <Link
                    to="#"
                    className="bg-blue-600 hover:bg-blue-700 rounded-md text-white font-bold py-3 px-3 flex items.center justify-center"
                  >
                    {feature.badge}
                  </Link>
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
}

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          
        </p>
      </>
    ),
    badge: "Rs 4000",
    image: "general/Hero.png",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          
        </p>
      </>
    ),
    badge: "Rs 5000",
    image: "general/Hero1.png",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
         
        </p>
      </>
    ),
    badge: "Rs 6000",
    image: "general/Hero2.png",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          
        </p>
      </>
    ),
    badge: "Launch Week",
    image: "general/Hero2.png",
  },
];
