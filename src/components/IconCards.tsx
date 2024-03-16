// import React from "react";
// import { BackgroundGradient } from "../components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";

// export function IconCards() {
//   return (
//     <div>
//       <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
//         <img
//           src={`/jordans.webp`}
//           alt="jordans"
//           height="400"
//           width="400"
//           className="object-contain"
//         />
//         <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
//           Air Jordan 4 Retro Reimagined
//         </p>

//         <p className="text-sm text-neutral-600 dark:text-neutral-400">
//           The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
//           February 17, 2024. Your best opportunity to get these right now is by
//           entering raffles and waiting for the official releases.
//         </p>
//         <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
//           <span>Buy now </span>
//           <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
//             $100
//           </span>
//         </button>
//       </BackgroundGradient>
//     </div>
//   );
// }

import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "../components/data/music_courses.json";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image?: string;
}

export function IconCards() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className=" min-h-screen  w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
    {featuredCourses.map((course: Course) => (
      <div key={course.id} className="flex justify-center">
        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden max-w-40 h-40">
          <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <img
                    src={course.image}
                    alt="jordans"
                    height="50"
                    width="50"
                    className="object-contain"
                  />
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>

                  <a href={`/courses/${course.slug}`}>Learn More</a>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <a
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </a>
      </div>
    </div>
  );
}
