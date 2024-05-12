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
      header: "https://th.bing.com/th/id/OSK.HEROvyrv-OGkCPcgCymSBi3fBX4jH4HC9pvr-WiA3P7IT-I?rs=1&pid=ImgDetMain",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Hampi",
      description: "Step into the ancient ruins of Hampi, a UNESCO World Heritage Site that was once the capital of the Vijayanagara Empire. Marvel at the majestic temples, intricate carvings, and surreal landscape that transport you back in time.",
      header: "https://www.tripsavvy.com/thmb/HDyF5ZHPOg87pZNALdbrHtX9alg=/2121x1414/filters:fill(auto,1)/GettyImages-728906169-59a035d50d327a0010063694.jpg",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Coorg",
      description: "Escape to the picturesque hills of Coorg, also known as Kodagu, and immerse yourself in lush coffee plantations, mist-covered mountains, and cascading waterfalls. Explore scenic hiking trails, visit spice estates, and indulge in local cuisine.",
      header: "https://th.bing.com/th/id/R.8af0cae401ad379a2ae8452061ffcf15?rik=YnXatieIGPgicA&riu=http%3a%2f%2fwww.rideforrotary.com%2fwp-content%2fuploads%2f2019%2f03%2fkodagu.jpg&ehk=8j9NMMeuZ8wfZDxBWIpd%2fSUvbaxcRZtVVm3ixLIm8ys%3d&risl=&pid=ImgRaw&r=0",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Gokarna Beaches",
      description: "Relax on the pristine beaches of Gokarna, a tranquil coastal town known for its laid-back vibe and scenic beauty. Enjoy sunbathing, swimming, and water sports at Om Beach, Kudle Beach, and Half Moon Beach.",
      header: "https://www.tripsavvy.com/thmb/Hdpjrxt19rVrb-v6j2N4xzMEvg0=/2000x1500/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-541506666-5c30068246e0fb00018647ce.jpg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Badami Caves",
      description: "Explore the ancient rock-cut caves of Badami, carved out of sandstone cliffs and adorned with intricate sculptures and carvings. Discover the rich history and architectural marvels of these archaeological wonders.",
      header: "https://th.bing.com/th/id/R.e571e51c10c1d1d982ec68206d837932?rik=wwSqTMt78eA0uw&riu=http%3a%2f%2fwww.thehistoryhub.com%2fwp-content%2fuploads%2f2016%2f08%2fBadami-Cave-Temple.jpg&ehk=y8ZMtAHlQlo%2bGKbf05oWyGBMrkphT103NwszOjSp6cY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mullayanagiri Peak",
      description: "Embark on a trek to Mullayanagiri, the highest peak in Karnataka, and soak in breathtaking views of the Western Ghats. Challenge yourself with the ascent and reward yourself with panoramic vistas from the summit.",
      header: "https://media-cdn.tripadvisor.com/media/photo-o/15/6e/54/05/img-20180922-090745-hdr.jpg",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Belur and Halebidu Temples",
      description: "Witness the architectural splendor of Belur and Halebidu, renowned for their intricately carved temples dating back to the Hoysala Empire. Marvel at the exquisite craftsmanship and timeless beauty of these ancient monuments.",
      header: "https://4.bp.blogspot.com/-8di5JgFx5C4/VPU_Gwcx-2I/AAAAAAAAIWw/tApMqLFSe2Q/s1600/Belur03.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Bandipur National Park",
      description: "Embark on a wildlife safari in Bandipur National Park, a protected reserve known for its diverse flora and fauna. Spot majestic elephants, tigers, leopards, and a variety of bird species amidst the lush greenery of the Western Ghats.",
      header: "https://media-cdn.tripadvisor.com/media/photo-s/05/09/20/7e/bandipur-national-park.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Chikmagalur Coffee Plantations",
      description: "Immerse yourself in the aroma of freshly brewed coffee at Chikmagalur, a paradise for coffee lovers nestled amidst the Baba Budangiri and Mullayanagiri ranges. Explore sprawling coffee estates, learn about the coffee-making process, and savor the local brew.",
      header: "https://viewtraveling.com/wp-content/uploads/2020/07/chikmagalur.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Udupi Temples and Cuisine",
      description: "Experience the cultural and culinary delights of Udupi, known for its ancient temples and delectable cuisine. Pay homage at the historic Udupi Sri Krishna Temple and treat your taste buds to authentic Udupi dishes like Masala Dosa and Idli-Sambhar.",
      header: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_107527598_20200302122258.png",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  