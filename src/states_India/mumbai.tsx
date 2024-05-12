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

export function Mumbai_places() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-end ">
    <BentoGrid className="mt-8 max-w-4xl mx-auto">
      {Mumbai.map((item, i) => (
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

const Mumbai = [
    {
      title: "Gateway of India",
      description: "Marvel at the grandeur of the Gateway of India, an iconic monument overlooking the Arabian Sea. Built during the British Raj, this architectural marvel serves as a symbol of Mumbai's rich history and cultural heritage.",
      header: "https://im.whatshot.in/img/2019/Feb/gateway-of-india-4b-cropped-1549871701.jpg",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Marine Drive",
      description: "Take a leisurely stroll along the picturesque Marine Drive, also known as the Queen's Necklace, for breathtaking views of the Arabian Sea. This iconic promenade is a popular spot for evening walks and enjoying mesmerizing sunsets.",
      header: "https://www.tripsavvy.com/thmb/yUM8q2-VUym6o52vUX8DkKlq4vk=/4241x2442/filters:fill(auto,1)/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Elephanta Caves",
      description: "Explore the ancient rock-cut temples of Elephanta Caves, located on Elephanta Island in Mumbai Harbour. Admire the intricately carved sculptures and architectural marvels dating back to the 5th century AD, dedicated to Lord Shiva.",
      header: "https://www.eastcoastdaily.in/wp-content/uploads/2018/03/elephanta-caves.png",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Chhatrapati Shivaji Maharaj Terminus",
      description: "Admire the Gothic architecture of Chhatrapati Shivaji Maharaj Terminus, a UNESCO World Heritage Site and one of Mumbai's busiest railway stations. Marvel at the intricate details, towering domes, and ornate facades of this historic landmark.",
      header: "https://mumbaitourism.travel/images/places-to-visit/headers/chhatrapati-shivaji-terminus-mumbai-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Juhu Beach",
      description: "Relax on the golden sands of Juhu Beach, one of Mumbai's most popular beaches. Enjoy a variety of street food, take a horse ride along the shoreline, or simply soak in the vibrant atmosphere of this bustling coastal stretch.",
      header: "https://th.bing.com/th/id/OIP.fpaQt_Z-q5gewPjt11kZGAHaEK?rs=1&pid=ImgDetMain",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Haji Ali Dargah",
      description: "Visit the Haji Ali Dargah, a mosque and tomb located on a small islet in the Arabian Sea. Pay homage to the revered Sufi saint Haji Ali and admire the stunning Indo-Islamic architecture of this spiritual landmark.",
      header: "https://th.bing.com/th/id/OLC.AaW7aDIZiIwTgg480x360?rs=1&pid=ImgDetMain",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Bandra-Worli Sea Link",
      description: "Drive along the Bandra-Worli Sea Link, a cable-stayed bridge that spans the Arabian Sea and connects the suburbs of Bandra and Worli. Enjoy panoramic views of the Mumbai skyline and the sea while crossing this engineering marvel.",
      header: "https://www.steppestravel.com/app/uploads/2019/06/mumbai-india_1.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Sanjay Gandhi National Park",
      description: "Escape the urban hustle and bustle at Sanjay Gandhi National Park, a sprawling green oasis in the heart of Mumbai. Explore lush forests, ancient caves, and diverse wildlife while enjoying hiking trails and scenic viewpoints.",
      header: "https://th.bing.com/th/id/OIP.b9F233qDiToVB1xHCGQucwHaEo?rs=1&pid=ImgDetMain",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Colaba Causeway",
      description: "Shop till you drop at Colaba Causeway, a bustling street market known for its vibrant atmosphere and eclectic range of goods. Browse through clothing, accessories, handicrafts, and souvenirs while soaking in the local culture.",
      header: "https://cdn.theculturetrip.com/wp-content/uploads/2015/10/hctp0002-guptay-india-mumbai-taj-mahal-palace-hotel-3_stock-1024x685.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Nehru Science Centre",
      description: "Ignite your curiosity at the Nehru Science Centre, an interactive science museum in Mumbai. Discover fascinating exhibits, hands-on activities, and science shows that inspire learning and exploration for visitors of all ages.",
      header: "https://nehrusciencecentre.gov.in/wp-content/uploads/2022/03/Hall-of-Aviation-and-Space-2.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  