import React from "react";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
  IconBrandYoutubeFilled,
  IconBrandTwitterFilled,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconHomeFilled,
  IconAddressBook,
  IconMail,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="overflow-x-hidden overflow-y-auto  w-full dark:bg-grey-800 bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-white text-lg">
            TourMate: Where every journey is a story waiting to be told. Explore
            with us and uncover the world's hidden treasures, one adventure at a
            time.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-white text-lg ">
            <li className="mt-6">
              <Link
                to="#"
                className=" hover:text-yellow-200 transition-colors duration-300"
              >
                <div className="flex items-center space-x-2">
                <IconHomeFilled/>
                <span>Home</span>
              </div>
              </Link>
            </li>
            <li className="mt-6">
              <Link
                to="#"
                className=" hover:text-blue-400 transition-colors duration-300"
              >
                <div className="flex items-center space-x-2">
                <IconAddressBook stroke={2} />
                <span>Contact</span>
              </div>
              </Link>
            </li>
            <li className="mt-6">
              <Link
                to="#"
                className=" hover:text-red-800 transition-colors duration-300"
              >
                <div className="flex items-center space-x-2">
                <IconMail stroke={2} />
                <span>Email</span>
              </div>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className=" text-white text-lg space-x-4">
            <Link
              to="#"
              className="hover:text-red-800 transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <IconBrandYoutubeFilled stroke={2} />
                <span>Youtube</span>
              </div>
            </Link>
            <Link
              to="/youtube.com"
              className="hover:text-red-400 transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <IconBrandInstagram stroke={2} />
                <span>Instagram</span>
              </div>
            </Link>
            <Link
              to="#"
              className="hover:text-blue-800 transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <IconBrandFacebookFilled/>
                <span>Facebook</span>
              </div>
            </Link>
            <Link
              to="#"
              className="hover:text-grey-500 transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <IconBrandTwitterFilled/>
                <span>Twitter</span>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <div className="text-white text-lg">
            <p>Bettiah Bihar, India</p>
            <p>Bihar 845438</p>
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
