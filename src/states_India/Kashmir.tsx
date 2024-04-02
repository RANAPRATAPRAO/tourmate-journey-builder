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

export function KASHMIR() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-end ">
    <BentoGrid className="mt-8 max-w-4xl mx-auto">
      {Kashmir.map((item, i) => (
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

const Kashmir = [
    {
      title: "Dal Lake",
      description: "Experience the serene beauty of Dal Lake, often referred to as the 'Jewel in the Crown of Kashmir.' Embark on a shikara ride or stay in a houseboat to admire the floating gardens, colorful shikaras, and stunning views of the surrounding mountains.",
      header: "images/dal_lake.jpg",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Gulmarg",
      description: "Escape to the picturesque hill station of Gulmarg, known for its snow-capped peaks, lush meadows, and adventure sports. Experience world-class skiing, trekking, and golfing amidst the breathtaking landscapes of the Pir Panjal range.",
      header: "images/gulmarg.jpg",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Shalimar Bagh",
      description: "Stroll through the exquisite Shalimar Bagh, a Mughal garden built by Emperor Jahangir for his wife Nur Jahan. Admire the terraced lawns, vibrant flowerbeds, and cascading fountains that epitomize the beauty of Mughal garden design.",
      header: "images/shalimar_bagh.jpg",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Sonamarg",
      description: "Explore the enchanting meadows of Sonamarg, also known as the 'Meadow of Gold,' nestled in the Himalayas. Trek amidst alpine forests, gushing rivers, and glaciers, or embark on an adventurous journey to nearby attractions like Thajiwas Glacier.",
      header: "images/sonamarg.jpg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Srinagar",
      description: "Discover the charms of Srinagar, the summer capital of Jammu and Kashmir, famous for its gardens, lakes, and houseboats. Explore attractions like Nishat Bagh, Pari Mahal, and Jama Masjid while immersing yourself in the rich culture and heritage of Kashmir.",
      header: "images/srinagar.jpg",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Pahalgam",
      description: "Indulge in the natural beauty of Pahalgam, a scenic town surrounded by lush forests, gushing rivers, and snow-capped peaks. Trek to stunning viewpoints like Betaab Valley and Aru Valley, or simply relax amidst the tranquil surroundings.",
      header: "images/pahalgam.jpg",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Betaab Valley",
      description: "Immerse yourself in the breathtaking beauty of Betaab Valley, named after the Bollywood movie 'Betaab' that was shot here. Surrounded by lush greenery, towering mountains, and gushing streams, this valley offers a perfect retreat for nature lovers.",
      header: "images/betaab_valley.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Aru Valley",
      description: "Embark on an adventure to Aru Valley, a picturesque valley located near Pahalgam. Trek through alpine meadows, pine forests, and meandering streams while enjoying panoramic views of the surrounding mountains and glaciers.",
      header: "images/aru_valley.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mughal Gardens",
      description: "Visit the Mughal Gardens of Kashmir, including Nishat Bagh, Shalimar Bagh, and Chashme Shahi, known for their stunning beauty and historical significance. Explore terraced gardens, cascading fountains, and intricately designed flowerbeds.",
      header: "images/mughal_gardens.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Martand Sun Temple",
      description: "Discover the ancient ruins of Martand Sun Temple, an architectural marvel dedicated to the Sun God. Admire the intricate carvings, grand pillars, and panoramic views of the Kashmir Valley from this historic site.",
      header: "images/martand_sun_temple.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  