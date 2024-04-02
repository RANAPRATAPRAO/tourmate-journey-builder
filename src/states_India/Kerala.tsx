import { cn } from "../utils/cn";
import React from "react";
import { BentoGridItem } from "../components/ui/bento-grid";
import  BentoGrid  from "../components/ui/bento-grid";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Kerala_Places() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-end ">
    <BentoGrid className="mt-8 max-w-4xl mx-auto">
      {Kerala.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i===3 || i===6 || i===10 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  );
}

const Kerala = [
    {
      title: "Backwaters of Alleppey",
      description: "Cruise through the serene backwaters of Alleppey on a traditional houseboat, surrounded by lush greenery and tranquil waters. Experience the unique beauty of Kerala's backwaters, often referred to as the 'Venice of the East.'",
      header: "images/alleppey_backwaters.jpg",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Munnar Tea Gardens",
      description: "Explore the picturesque tea gardens of Munnar, nestled amidst the Western Ghats. Witness the lush green slopes, cascading waterfalls, and mist-covered mountains, making it a paradise for nature lovers and photographers.",
      header: "images/munnar_tea_gardens.jpg",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Athirappilly Waterfalls",
      description: "Marvel at the majestic beauty of Athirappilly Waterfalls, the largest waterfall in Kerala. Located near Thrissur, these cascading falls are surrounded by lush forests and offer a mesmerizing sight to behold.",
      header: "images/athirappilly_waterfalls.jpg",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Kochi Fort",
      description: "Step into the historic past at Kochi Fort, a UNESCO World Heritage Site that reflects the multicultural heritage of Kerala. Explore colonial-era buildings, quaint streets, and vibrant markets in this charming coastal city.",
      header: "images/kochi_fort.jpg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Wayanad Wildlife Sanctuary",
      description: "Embark on a wildlife safari in Wayanad Wildlife Sanctuary, home to a diverse range of flora and fauna. Explore dense forests, grasslands, and waterfalls while spotting elephants, tigers, leopards, and various bird species.",
      header: "images/wayanad_wildlife_sanctuary.jpg",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Kovalam Beach",
      description: "Relax on the golden sands of Kovalam Beach, one of Kerala's most popular beach destinations. Enjoy swimming, sunbathing, and water sports, or simply unwind with stunning views of the Arabian Sea.",
      header: "images/kovalam_beach.jpg",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Periyar Wildlife Sanctuary",
      description: "Experience the rich biodiversity of Periyar Wildlife Sanctuary, located in Thekkady. Take a boat cruise on Periyar Lake to spot elephants, bison, deer, and a variety of bird species amidst the lush greenery of the Western Ghats.",
      header: "images/periyar_wildlife_sanctuary.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Varkala Beach",
      description: "Bask in the tranquil ambiance of Varkala Beach, known for its stunning cliffs and mineral springs. Explore the vibrant cliff-top shops, cafes, and yoga centers while enjoying panoramic views of the Arabian Sea.",
      header: "images/varkala_beach.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Alappuzha Beach",
      description: "Unwind at Alappuzha Beach, also known as Alleppey Beach, renowned for its pristine sands and serene surroundings. Take a leisurely stroll along the shoreline, indulge in delicious seafood, and witness mesmerizing sunsets over the Arabian Sea.",
      header: "images/alappuzha_beach.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Thekkady Spice Plantations",
      description: "Immerse yourself in the aromatic world of spices at Thekkady Spice Plantations, where you can witness the cultivation of cardamom, pepper, cloves, and other spices. Take a guided tour to learn about the cultivation techniques and medicinal properties of various spices.",
      header: "images/thekkady_spice_plantations.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  