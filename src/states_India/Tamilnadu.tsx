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

export function Tamilnadu_places() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-end ">
    <BentoGrid className="mt-8 max-w-4xl mx-auto">
      {Tamilnadu.map((item, i) => (
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

const Tamilnadu = [
    {
      title: "Meenakshi Amman Temple",
      description: "Marvel at the intricate architecture and rich cultural heritage of Meenakshi Amman Temple in Madurai. Dedicated to Goddess Meenakshi, this iconic temple complex features stunning Dravidian-style architecture and vibrant sculptures.",
      header: "https://th.bing.com/th/id/OIP.EErfdLIvhQOZNxs135JcGwHaE8?rs=1&pid=ImgDetMain",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mahabalipuram Shore Temple",
      description: "Explore the ancient wonders of Mahabalipuram Shore Temple, a UNESCO World Heritage Site situated on the shores of the Bay of Bengal. Dating back to the 8th century, this magnificent temple is renowned for its architectural splendor and scenic location.",
      header: "https://s1.it.atcdn.net/wp-content/uploads/2017/08/australian-traveller-tamil-nadu3.jpg",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Rameswaram",
      description: "Embark on a spiritual journey to Rameswaram, one of the holiest places for Hindus. This sacred island town is famous for its temples, including the Ramanathaswamy Temple, and is believed to be the place where Lord Rama built a bridge to Lanka.",
      header: "https://th.bing.com/th/id/OIP.UImd9Vo5BI3tqZpMIDuPQwHaEt?rs=1&pid=ImgDetMain",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Kodaikanal",
      description: "Escape to the serene hill station of Kodaikanal, nestled in the Palani Hills of Tamil Nadu. Known as the 'Princess of Hill Stations,' Kodaikanal offers breathtaking views, lush forests, and picturesque lakes, making it a perfect getaway for nature lovers.",
      header: "https://www.spews.org/wp-content/uploads/2018/04/rsz_1kodaikanal_resort_cover_image_kb65928102736.jpg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Thanjavur Brihadeeswarar Temple",
      description: "Admire the architectural grandeur of Thanjavur Brihadeeswarar Temple, an ancient Hindu temple dedicated to Lord Shiva. Built by King Raja Raja Chola I in the 11th century, this temple is a masterpiece of Dravidian architecture and a UNESCO World Heritage Site.",
      header: "http://4.bp.blogspot.com/-O02_oAWSF-o/TsebECj-2GI/AAAAAAAAAiE/OfSyEnt_uEA/s1600/TamilNadu.jpg",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Ooty",
      description: "Experience the charm of Ooty, also known as Udhagamandalam, nestled in the Nilgiri Hills. This popular hill station is famous for its scenic beauty, tea gardens, and pleasant climate, making it a favorite destination for honeymooners and nature enthusiasts.",
      header: "https://th.bing.com/th/id/OIP.cCmqOFBBeAcgHbm4YlWyigAAAA?rs=1&pid=ImgDetMain",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Chennai Marina Beach",
      description: "Stroll along the Marina Beach in Chennai, one of the longest urban beaches in the world. Enjoy panoramic views of the Bay of Bengal, indulge in delicious street food, and experience the vibrant atmosphere of this bustling waterfront.",
      header: "https://th.bing.com/th?id=OLC.eUXv35SZjaa+%2fw480x360&rs=1&pid=ImgDetMain",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Madurai Thirumalai Nayakkar Palace",
      description: "Step back in time at Thirumalai Nayakkar Palace in Madurai, a magnificent example of Indo-Saracenic architecture. Built by King Thirumalai Nayak in the 17th century, this palace showcases exquisite craftsmanship and historical significance.",
      header: "https://th.bing.com/th/id/OIP.hC6qxgIzU9cILjlnk5dKvgHaEp?rs=1&pid=ImgDetMain",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Tiruchirappalli Rock Fort",
      description: "Climb the ancient rock fort in Tiruchirappalli (Trichy) for panoramic views of the city and its surroundings. This historic fortress complex houses several temples, including the famous Ucchi Pillayar Temple dedicated to Lord Ganesha.",
      header: "https://4.bp.blogspot.com/-4-JPXGMPOUY/WhHZ041GAjI/AAAAAAAA_Vc/Hm90GXODfBs8SAjo5u5qfc74l5R5wEA5ACLcBGAs/s1600/20538511970_1782b479c6_b.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Kanyakumari",
      description: "Witness the breathtaking confluence of three oceans at Kanyakumari, the southernmost tip of mainland India. Explore iconic landmarks like the Vivekananda Rock Memorial and Thiruvalluvar Statue while enjoying mesmerizing sunsets over the Arabian Sea.",
      header: "https://th.bing.com/th/id/OIP.K5FLEAO0DDNKQULH0m3UlgAAAA?rs=1&pid=ImgDetMain",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  