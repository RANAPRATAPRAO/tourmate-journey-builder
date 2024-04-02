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

export function Bihar_Places() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-end ">
    <BentoGrid className="mt-8 max-w-7xl mx-auto">
      {Bihar.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i===2 || i===5 || i===9 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  );
}

const Bihar = [
    {
      title: "Nalanda University",
      description: "Visit the ancient ruins of Nalanda University, a renowned center of learning in ancient India. It was a hub of Buddhist education and attracted scholars from all over the world.",
      header: "images/nalanda.jpg",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mahabodhi Temple",
      description: "Experience the spiritual aura of Mahabodhi Temple in Bodh Gaya, where Lord Buddha is believed to have attained enlightenment. The temple complex is a UNESCO World Heritage Site and a major pilgrimage destination for Buddhists.",
      header: "images/mahabodhi_temple.jpg",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Rajgir Hills",
      description: "Explore the scenic beauty and historical significance of Rajgir Hills, located near Nalanda. It is believed that Lord Buddha spent several years here and delivered many sermons. The aerial tramway to the top offers breathtaking views.",
      header: "images/rajgir_hills.jpg",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Valmiki National Park",
      description: "Discover the diverse wildlife and lush greenery of Valmiki National Park, situated in the West Champaran district. This protected area is home to rare species like Bengal tigers, leopards, and Indian sloth bears.",
      header: "images/valmiki_national_park.jpg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Bodhi Tree",
      description: "Pay homage to the sacred Bodhi Tree in Bodh Gaya, under which Lord Buddha is said to have attained enlightenment. The tree is considered one of the oldest living trees in the world and holds great significance for Buddhists.",
      header: "images/bodhi_tree.jpg",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Patna Museum",
      description: "Immerse yourself in the rich history and artistry of Bihar at Patna Museum, located in the capital city. The museum houses a vast collection of artifacts, sculptures, and paintings dating back to ancient times.",
      header: "images/patna_museum.jpg",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
  ];
  