import React from "react";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

function Footer() {
  return (
    <footer className="overflow-x-hidden overflow-y-auto min-h-screen  w-full dark:bg-grey-800 bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-white text-lg">
           TourMate: Where every journey is a story waiting to be told.
           Explore with us and uncover the world's hidden treasures,
            one adventure at a time.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-white text-lg">
            <li>
              <a
                href="#"
                className=" hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex text-white text-lg space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <div className="text-white text-lg">
          <p>Bettiah Bihar, India</p>
          <p>Delhi 10001</p>
          <p>Email: rrr725497@gmail.com</p>
          <p>Phone: 7254972031</p>
          </div>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 TOURMATE. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
