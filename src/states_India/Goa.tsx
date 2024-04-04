import { cn } from "../utils/cn";
import React from "react";
import { BentoGridItem } from "../components/ui/bento-grid";
import  BentoGrid  from "../components/ui/bento-grid";
import { useParams } from "react-router-dom";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";




export function GOA1({data}) {
 
 
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-end ">
    <BentoGrid className="mt-8 max-w-4xl mx-auto">
      {data.map((item, i) => (
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



const Goa = [
    {
      title: "Baga Beach",
      description: "Relax on the golden sands of Baga Beach, one of the most popular beaches in North Goa. Enjoy water sports like parasailing and jet skiing, indulge in delicious seafood at beach shacks, and groove to live music at beachfront bars.",
      header: "images/baga_beach.jpg",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Calangute Beach",
      description: "Experience the vibrant atmosphere of Calangute Beach, known as the 'Queen of Beaches' in Goa. Sunbathe on the expansive shoreline, shop for souvenirs at the bustling markets, and savor local delicacies at nearby eateries.",
      header: "images/calangute_beach.jpg",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Anjuna Beach",
      description: "Explore the bohemian vibes of Anjuna Beach, famous for its weekly flea market and lively beach parties. Chill out at beachside cafes, shop for handicrafts and trinkets, and dance the night away under the stars.",
      header: "images/anjuna_beach.jpg",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Dudhsagar Waterfalls",
      description: "Embark on an adventure to Dudhsagar Waterfalls, one of India's tallest waterfalls located in the heart of the Western Ghats. Trek through lush forests, swim in natural pools, and marvel at the milky cascade of water.",
      header: "images/dudhsagar_waterfalls.jpg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Fort Aguada",
      description: "Step back in time at Fort Aguada, a 17th-century Portuguese fort overlooking the Arabian Sea. Explore the ancient ramparts, visit the lighthouse for panoramic views, and discover the history of this well-preserved monument.",
      header: "images/fort_aguada.jpg",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Palolem Beach",
      description: "Relax on the pristine shores of Palolem Beach, a crescent-shaped paradise in South Goa. Take a boat ride to Butterfly Island, try your hand at paddleboarding, or simply unwind with a yoga session on the beach.",
      header: "images/palolem_beach.jpg",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Chapora Fort",
      description: "Visit Chapora Fort, perched on a hill overlooking Vagator Beach, and enjoy panoramic views of the coastline. Explore the ruins of this ancient fort, made famous by the Bollywood movie 'Dil Chahta Hai,' and capture stunning sunset vistas.",
      header: "images/chapora_fort.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Candolim Beach",
      description: "Relish the tranquil ambiance of Candolim Beach, a serene stretch of coastline dotted with palm trees and beach shacks. Take a leisurely stroll along the shoreline, try your luck at water sports, or simply soak in the laid-back vibe.",
      header: "images/candolim_beach.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Dolphin Watching",
      description: "Embark on a thrilling dolphin-watching excursion off the coast of Goa and witness these majestic creatures in their natural habitat. Hop aboard a boat, cruise along the Arabian Sea, and keep your eyes peeled for playful dolphins leaping out of the water.",
      header: "images/dolphin_watching.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Fontainhas",
      description: "Discover the charm of Fontainhas, the Latin Quarter of Goa known for its colorful Portuguese colonial architecture and narrow winding streets. Explore heritage buildings, art galleries, and quaint cafes while immersing yourself in the rich cultural heritage of the area.",
      header: "images/fontainhas.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];


  
  export const Karnataka = [
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


  
  