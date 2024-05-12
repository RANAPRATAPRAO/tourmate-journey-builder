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

export function LADAKH() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-end ">
    <BentoGrid className="mt-8 max-w-4xl mx-auto">
      {Ladakh.map((item, i) => (
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

const Ladakh = [
    {
      title: "Pangong Lake",
      description: "Marvel at the enchanting beauty of Pangong Lake, a breathtaking high-altitude lake situated amidst the majestic Himalayas. The crystal-clear blue waters and dramatic landscape make it a popular destination for photography and relaxation.",
      header: "https://img.onmanorama.com/content/dam/mm/en/travel/beyond-kerala/images/2020/6/11/pangong-lake.jpg",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Nubra Valley",
      description: "Embark on a journey to the surreal landscapes of Nubra Valley, known for its stark beauty and unique attractions like sand dunes and double-humped Bactrian camels. Experience the tranquility of this high-altitude desert region.",
      header: "https://farm9.staticflickr.com/8530/8675364814_728630e0ac_k.jpg",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Leh Palace",
      description: "Explore the historic Leh Palace, a former royal palace perched on a hill overlooking the town of Leh. Marvel at the traditional Tibetan architecture, ancient artifacts, and panoramic views of the surrounding mountains and valleys.",
      header: "https://imgcld.yatra.com/ytimages/image/upload/v1462517217/Leh-Leh_Palace2.jpg",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Khardung La Pass",
      description: "Conquer the world's highest motorable pass, Khardung La, and enjoy breathtaking views of the snow-capped Himalayas. Challenge yourself with the high-altitude drive or motorcycle ride to reach this iconic mountain pass.",
      header: "https://discoverlehladakh.in/wp-content/uploads/2020/06/Khardung-la-pass.jpg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Hemis Monastery",
      description: "Immerse yourself in the spiritual ambiance of Hemis Monastery, one of the largest and wealthiest monasteries in Ladakh. Witness colorful festivals, ancient rituals, and a rich collection of Buddhist artifacts and thangkas.",
      header: "https://i.ytimg.com/vi/UZA0RkL2HN4/maxresdefault.jpg",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Tso Moriri Lake",
      description: "Experience the serene beauty of Tso Moriri Lake, a high-altitude lake located in the Changthang plateau. Surrounded by snow-capped mountains and vast meadows, this pristine lake is a haven for birdwatchers and nature enthusiasts.",
      header: "https://media-cdn.tripadvisor.com/media/photo-s/16/22/46/bc/tso-moriri-karzog-village.jpg",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Diskit Monastery",
      description: "Discover the ancient Diskit Monastery, perched on a hilltop in the Nubra Valley. Admire the stunning views of the surrounding landscape and explore the monastery's intricate murals, statues, and prayer halls.",
      header: "https://pixahive.com/wp-content/uploads/2020/09/Diskit-Monastery-in-the-Nubra-Valley-of-Ladakh-46726-pixahive.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Zanskar Valley",
      description: "Embark on an adventure to Zanskar Valley, a remote and pristine region known for its rugged terrain, ancient monasteries, and adventurous treks. Explore frozen rivers, high mountain passes, and traditional Ladakhi villages.",
      header: "https://www.holidify.com/images/compressed/attractions/attr_458.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Shanti Stupa",
      description: "Find peace and tranquility at Shanti Stupa, a white-domed Buddhist stupa perched atop a hill in Leh. Enjoy panoramic views of the Leh cityscape, surrounding mountains, and the Indus River valley from this sacred monument.",
      header: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/3-shanti-stupa-ladakh-jammu-and-kashmir-india-rudra-narayan-mitra.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Lamayuru Monastery",
      description: "Visit the ancient Lamayuru Monastery, one of the oldest and largest monasteries in Ladakh. Explore the monastery's unique architecture, sacred relics, and mesmerizing lunar-like landscape that surrounds it.",
      header: "https://www.journeysinternational.com/wp-content/uploads/2019/04/lamayuru-monastery-india.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  