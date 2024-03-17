import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "../components/data/music_courses.json";
import { BackgroundGradient2 } from "./ui/background-gradient2";

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
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      {/* <div className="mt-10 mx-8 w-full"> */}
      <h2 className="mb-8 text-center text-base text-teal-400 font-bold tracking-wide uppercase">
        Trending places in India
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center">
        {featuredCourses.slice(0, 8).map((course: Course) => (
          <div key={course.id} className="flex flex-col items-center">
            <BackgroundGradient className="flex flex-col rounded-[15px] bg-white dark:bg-zinc-900 overflow-hidden max-w-60 h-55">
              <div className="flex flex-col items-center text-center flex-grow">
                <img
                  src={course.image}
                  alt="jordans"
                  style={{
                    width: "100wv",
                    height: "100hv",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </BackgroundGradient>
            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {course.title}
            </p>
          </div>
        ))}
        {/* </div> */}
      </div>

      <div className="mt-10 ">
        <h2 className="text-3xl font-semibold text-center text-white mb-4">
          Features of the website
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 justify-center">
          {featuredCourses.slice(0, 5).map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient2 className="flex flex-col rounded-[10px] bg-gray-500 dark:bg-gray-800 overflow-hidden max-w-40 h-40 ">
                <div className="p-1 sm:p-2 flex flex-col items-center text-center flex-grow">
                  <img
                    src={course.image}
                    alt="jordans"
                    style={{ width: "60%", height: "40%", objectFit: "cover" }}
                  />
                  <p className="text-xs sm:text-sm text-black mt-1 mb-8 dark:text-neutral-200">
                    {course.title}
                  </p>
                </div>
              </BackgroundGradient2>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All courses
          </a>
        </div>
      </div>
    </div>
  );
}
