
import React from "react";
import { FloatingNav } from "../components/ui/navbar-menu";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Meteors } from "../components/ui/meteors";
import { Input } from "../components/ui/input";
import { cn } from "../utils/cn";


export function Navbar1() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Features",
      link: "features",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Holiday Ideas",
      link: "holiday",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Trending Places",
      link: "MovingCards",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "ArtGallery",
      link: "/ArtGallery",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return <FloatingNav navItems={navItems}  /> 
}