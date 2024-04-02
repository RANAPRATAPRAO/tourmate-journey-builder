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

export function Karnataka_places() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-end ">
    <BentoGrid className="mt-8 max-w-4xl mx-auto">
      {Karnataka.map((item, i) => (
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

const Karnataka = [
    {
      title: "Mysore Palace",
      description: "Admire the grandeur of Mysore Palace, one of the most magnificent royal residences in India. Explore the opulent halls, intricately carved doors, and stunning architecture that showcase the rich heritage of Karnataka's erstwhile rulers.",
      header: "images/mysore_palace.jpg",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Hampi",
      description: "Step into the ancient ruins of Hampi, a UNESCO World Heritage Site that was once the capital of the Vijayanagara Empire. Marvel at the majestic temples, intricate carvings, and surreal landscape that transport you back in time.",
      header: "images/hampi.jpg",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Coorg",
      description: "Escape to the picturesque hills of Coorg, also known as Kodagu, and immerse yourself in lush coffee plantations, mist-covered mountains, and cascading waterfalls. Explore scenic hiking trails, visit spice estates, and indulge in local cuisine.",
      header: "images/coorg.jpg",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Gokarna Beaches",
      description: "Relax on the pristine beaches of Gokarna, a tranquil coastal town known for its laid-back vibe and scenic beauty. Enjoy sunbathing, swimming, and water sports at Om Beach, Kudle Beach, and Half Moon Beach.",
      header: "images/gokarna_beaches.jpg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Badami Caves",
      description: "Explore the ancient rock-cut caves of Badami, carved out of sandstone cliffs and adorned with intricate sculptures and carvings. Discover the rich history and architectural marvels of these archaeological wonders.",
      header: "images/badami_caves.jpg",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mullayanagiri Peak",
      description: "Embark on a trek to Mullayanagiri, the highest peak in Karnataka, and soak in breathtaking views of the Western Ghats. Challenge yourself with the ascent and reward yourself with panoramic vistas from the summit.",
      header: "images/mullayanagiri_peak.jpg",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Belur and Halebidu Temples",
      description: "Witness the architectural splendor of Belur and Halebidu, renowned for their intricately carved temples dating back to the Hoysala Empire. Marvel at the exquisite craftsmanship and timeless beauty of these ancient monuments.",
      header: "images/belur_halebidu_temples.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Bandipur National Park",
      description: "Embark on a wildlife safari in Bandipur National Park, a protected reserve known for its diverse flora and fauna. Spot majestic elephants, tigers, leopards, and a variety of bird species amidst the lush greenery of the Western Ghats.",
      header: "images/bandipur_national_park.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Chikmagalur Coffee Plantations",
      description: "Immerse yourself in the aroma of freshly brewed coffee at Chikmagalur, a paradise for coffee lovers nestled amidst the Baba Budangiri and Mullayanagiri ranges. Explore sprawling coffee estates, learn about the coffee-making process, and savor the local brew.",
      header: "images/chikmagalur_coffee_plantations.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Udupi Temples and Cuisine",
      description: "Experience the cultural and culinary delights of Udupi, known for its ancient temples and delectable cuisine. Pay homage at the historic Udupi Sri Krishna Temple and treat your taste buds to authentic Udupi dishes like Masala Dosa and Idli-Sambhar.",
      header: "images/udupi_temples_cuisine.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  