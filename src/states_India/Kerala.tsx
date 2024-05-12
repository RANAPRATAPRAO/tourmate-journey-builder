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
      header: "https://th.bing.com/th?id=OIP.wwuO7u4jxRokG0nW8d6_OQHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Munnar Tea Gardens",
      description: "Explore the picturesque tea gardens of Munnar, nestled amidst the Western Ghats. Witness the lush green slopes, cascading waterfalls, and mist-covered mountains, making it a paradise for nature lovers and photographers.",
      header: "https://www.holidify.com/images/cmsuploads/compressed/Munnar66_20171216205538.jpg",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Athirappilly Waterfalls",
      description: "Marvel at the majestic beauty of Athirappilly Waterfalls, the largest waterfall in Kerala. Located near Thrissur, these cascading falls are surrounded by lush forests and offer a mesmerizing sight to behold.",
      header: "https://3.bp.blogspot.com/-CgxqzyvwPN4/VaFsCtIrycI/AAAAAAAAJHc/lA3SrF-pAAs/s1600/ATHIRAPALLY-FALLS.jpg",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Kochi Fort",
      description: "Step into the historic past at Kochi Fort, a UNESCO World Heritage Site that reflects the multicultural heritage of Kerala. Explore colonial-era buildings, quaint streets, and vibrant markets in this charming coastal city.",
      header: "https://img.ev.mu/images/attractions/7234/960x640/753166.jpg",
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
      header: "https://th.bing.com/th/id/R.8a2570201e0ce4df6d7689f34e87cceb?rik=9PHcSTVYQbfYAg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-PfDnUZA9b7I%2fVGyBuM2dwEI%2fAAAAAAAAAOA%2fth2FRM6xrAc%2fs1600%2fkovalam-beach-travel.jpg&ehk=7%2f23PHKmbOM0zr4B0HH%2bt9jhaeveK8%2fJq%2f0d%2fDzCfqY%3d&risl=&pid=ImgRaw&r=0",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Periyar Wildlife Sanctuary",
      description: "Experience the rich biodiversity of Periyar Wildlife Sanctuary, located in Thekkady. Take a boat cruise on Periyar Lake to spot elephants, bison, deer, and a variety of bird species amidst the lush greenery of the Western Ghats.",
      header: "https://www.keralabackwater.com/pictures/travel/periyar-wildlife-sanctuary228_a.jpeg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Varkala Beach",
      description: "Bask in the tranquil ambiance of Varkala Beach, known for its stunning cliffs and mineral springs. Explore the vibrant cliff-top shops, cafes, and yoga centers while enjoying panoramic views of the Arabian Sea.",
      header: "https://th.bing.com/th/id/OIP.9t2s-_QxhxZm-W3rlfAEZAHaE6?rs=1&pid=ImgDetMain",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Alappuzha Beach",
      description: "Unwind at Alappuzha Beach, also known as Alleppey Beach, renowned for its pristine sands and serene surroundings. Take a leisurely stroll along the shoreline, indulge in delicious seafood, and witness mesmerizing sunsets over the Arabian Sea.",
      header: "https://media-cdn.tripadvisor.com/media/photo-s/17/20/c8/7a/20190317-150044-largejpg.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Thekkady Spice Plantations",
      description: "Immerse yourself in the aromatic world of spices at Thekkady Spice Plantations, where you can witness the cultivation of cardamom, pepper, cloves, and other spices. Take a guided tour to learn about the cultivation techniques and medicinal properties of various spices.",
      header: "https://img.onmanorama.com/content/dam/mm/en/travel/getting-about-kerala/Idukki/images/2020/10/23/thekkady.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  