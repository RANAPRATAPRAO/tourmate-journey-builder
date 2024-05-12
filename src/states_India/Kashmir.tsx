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
      header: "https://www.tourmyindia.com/states/jammu-kashmir/image/dal-lake-s.jpg",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Gulmarg",
      description: "Escape to the picturesque hill station of Gulmarg, known for its snow-capped peaks, lush meadows, and adventure sports. Experience world-class skiing, trekking, and golfing amidst the breathtaking landscapes of the Pir Panjal range.",
      header: "https://th.bing.com/th/id/OIP.U2epJau-SwblG8K_5ICQDAHaE8?rs=1&pid=ImgDetMain",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Shalimar Bagh",
      description: "Stroll through the exquisite Shalimar Bagh, a Mughal garden built by Emperor Jahangir for his wife Nur Jahan. Admire the terraced lawns, vibrant flowerbeds, and cascading fountains that epitomize the beauty of Mughal garden design.",
      header: "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/3335/Shalimar-Bagh-84899.jpg",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Sonamarg",
      description: "Explore the enchanting meadows of Sonamarg, also known as the 'Meadow of Gold,' nestled in the Himalayas. Trek amidst alpine forests, gushing rivers, and glaciers, or embark on an adventurous journey to nearby attractions like Thajiwas Glacier.",
      header: "https://th.bing.com/th/id/OIP.7RDTuDaNbfdd4CAJ_ypLXQHaEK?rs=1&pid=ImgDetMain",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Srinagar",
      description: "Discover the charms of Srinagar, the summer capital of Jammu and Kashmir, famous for its gardens, lakes, and houseboats. Explore attractions like Nishat Bagh, Pari Mahal, and Jama Masjid while immersing yourself in the rich culture and heritage of Kashmir.",
      header: "https://th.bing.com/th/id/OIP.zicEj-wBCVzgWW6OJXZ_CgHaE0?w=237&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Pahalgam",
      description: "Indulge in the natural beauty of Pahalgam, a scenic town surrounded by lush forests, gushing rivers, and snow-capped peaks. Trek to stunning viewpoints like Betaab Valley and Aru Valley, or simply relax amidst the tranquil surroundings.",
      header: "https://wallpapercave.com/wp/wp2874386.jpg",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Betaab Valley",
      description: "Immerse yourself in the breathtaking beauty of Betaab Valley, named after the Bollywood movie 'Betaab' that was shot here. Surrounded by lush greenery, towering mountains, and gushing streams, this valley offers a perfect retreat for nature lovers.",
      header: "https://th.bing.com/th/id/R.5c161e61ad206a738d973de3bcd5b20c?rik=Bww0Z0QbkrfxNw&riu=http%3a%2f%2fwww.go2india.in%2fjnk%2fimages%2fb-betab-valley.jpg&ehk=btAYpVIMD4IEa2D8DrqvbSO1SEe2JSc%2fpFSKhNym%2fCA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Aru Valley",
      description: "Embark on an adventure to Aru Valley, a picturesque valley located near Pahalgam. Trek through alpine meadows, pine forests, and meandering streams while enjoying panoramic views of the surrounding mountains and glaciers.",
      header: "https://th.bing.com/th/id/OIP.tL0EIAZwYrv3417mjwK83QHaFj?rs=1&pid=ImgDetMain",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mughal Gardens",
      description: "Visit the Mughal Gardens of Kashmir, including Nishat Bagh, Shalimar Bagh, and Chashme Shahi, known for their stunning beauty and historical significance. Explore terraced gardens, cascading fountains, and intricately designed flowerbeds.",
      header: "https://i.pinimg.com/originals/31/c0/ea/31c0ea766919ff5f1abc67564e7e57ab.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Martand Sun Temple",
      description: "Discover the ancient ruins of Martand Sun Temple, an architectural marvel dedicated to the Sun God. Admire the intricate carvings, grand pillars, and panoramic views of the Kashmir Valley from this historic site.",
      header: "https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2022/05/mart.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  