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

export function Laksh() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-end ">
    <BentoGrid className="mt-8 max-w-4xl mx-auto">
      {Lakshadweep.map((item, i) => (
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

const Lakshadweep = [
    {
      title: "Agatti Island",
      description: "Experience the tropical paradise of Agatti Island, known for its pristine beaches, turquoise lagoons, and vibrant coral reefs. Dive into the crystal-clear waters for snorkeling, kayaking, and swimming amidst colorful marine life.",
      header: "https://www.travelviewpoint.com/wp-content/uploads/2024/01/The-Agatti-Island-Beach.jpg",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Bangaram Island",
      description: "Escape to the secluded beauty of Bangaram Island, a tranquil retreat surrounded by azure waters and swaying palm trees. Relax on the powdery white sands, go scuba diving to explore the coral gardens, and indulge in beachside dining.",
      header: "https://th.bing.com/th/id/OIP.idieb5oy-pastGaRvWxw_AAAAA?rs=1&pid=ImgDetMain",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Kavaratti Island",
      description: "Discover the cultural and natural treasures of Kavaratti Island, the administrative capital of Lakshadweep. Visit the Ujra Mosque, explore the Marine Aquarium, and unwind on pristine beaches fringed by coconut palms.",
      header: "https://i.pinimg.com/originals/72/60/18/726018a48d25e8e59d0c8089858df926.jpg",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Kalpeni Island",
      description: "Immerse yourself in the serene beauty of Kalpeni Island, renowned for its coral atoll and picturesque lagoons. Sail on traditional wooden boats, spot dolphins in the open sea, and enjoy panoramic views from the lighthouse.",
      header: "https://th.bing.com/th/id/OIP.LNzOWklSceh2za5nZPODpwHaEK?rs=1&pid=ImgDetMain",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Minicoy Island",
      description: "Explore the unspoiled landscapes of Minicoy Island, the southernmost atoll in Lakshadweep. Dive into the pristine waters for snorkeling and diving adventures, discover ancient lighthouses, and experience local culture.",
      header: "https://i.ytimg.com/vi/H6EpViAnzao/maxresdefault.jpg",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Agatti Lagoon",
      description: "Marvel at the breathtaking beauty of Agatti Lagoon, a vast expanse of turquoise waters teeming with marine life. Enjoy glass-bottom boat rides, paddleboarding, and sunset cruises while soaking in the stunning views.",
      header: "https://www.luxurytrailsofindia.com/wp-content/uploads/2016/10/Agatti-Island-Lakshadeep-Kerala-India.jpg",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Andrott Island",
      description: "Discover the tranquil charm of Andrott Island, known for its pristine beaches and historic landmarks. Visit the Andrott Lighthouse, explore ancient mosques, and unwind amidst the natural beauty of this remote island.",
      header: "https://amazingworld.travel/wp-content/uploads/2024/01/Androtti-Island-9.webp",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Thinnakara Island",
      description: "Escape to the secluded paradise of Thinnakara Island, surrounded by turquoise waters and coral reefs. Snorkel amidst vibrant marine life, enjoy beach picnics, and relax in the lap of nature on this idyllic island getaway.",
      header: "https://th.bing.com/th/id/OIP.7nXzW0AnqYbNIcRT4Hv-IgHaJ4?rs=1&pid=ImgDetMain",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Kadmat Island",
      description: "Experience the tranquility of Kadmat Island, a pristine coral island known for its clear waters and abundant marine life. Dive into the azure lagoons for snorkeling and diving adventures, or simply relax on the sun-kissed beaches.",
      header: "https://th.bing.com/th/id/OLC.Y489JSg6PodWiw480x360?rs=1&pid=ImgDetMain",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Suheli Par",
      description: "Explore the untouched beauty of Suheli Par, an uninhabited island known for its pristine beaches and rich biodiversity. Embark on nature walks, birdwatching tours, and snorkeling expeditions in the turquoise waters surrounding the island.",
      header: "https://th.bing.com/th/id/OIP.V9Oz3uUZGykeSl4CvAy-2gAAAA?rs=1&pid=ImgDetMain",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  