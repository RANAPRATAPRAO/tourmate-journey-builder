"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";

export function ParticularPlaces() {
    return (
        <div className=" dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
          <TracingBeam className="px-2">
            <div className=" pt-16 relative">
              {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="flex flex-col md:flex-row pb-10 w-full">
                  <div className="md:w-1/2 md:pr-4">
                    <img
                      src={item.image}
                      alt="blog thumbnail"
                      className="rounded-lg mb-4 md:mb-0 object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl mb-2 text-2xl mb-2 text-white font-bold tracking-wide leading-tight">{item.title}</h1>
                      
                      <div className="text-lg prose prose-sm dark:prose-invert text-2xl mb-2 text-white font-bold tracking-wide leading-tight">
                        {item.description}
                      </div>
                      <h2 className="bg-blue-500 text-white rounded-full text-sm font-semibold px-4 py-2 mb-4 inline-block shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                        {item.badge}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
          {/* Footer Section */}
          {/* Place your footer content here */}
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
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
       
      </>
    ),
    badge: "React",
    image:"general/Hero.png"
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
       
      </>
    ),
    badge: "Changelog",
    image:"general/Hero1.png"
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:"general/Hero2.png"
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:"general/Hero2.png"
  },
];
