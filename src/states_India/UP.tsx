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

export function UP() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-end ">
    <BentoGrid className="mt-8 max-w-4xl mx-auto">
      {UttarPradesh.map((item, i) => (
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

const UttarPradesh = [
    {
      title: "Taj Mahal",
      description: "Marvel at the breathtaking beauty of the Taj Mahal, one of the Seven Wonders of the World and a UNESCO World Heritage Site. Admire the symmetrical marble mausoleum, intricately carved details, and serene gardens that make it an iconic symbol of love.",
      header: "images/taj_mahal.jpg",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Varanasi Ghats",
      description: "Experience the spiritual essence of Varanasi Ghats, where pilgrims gather to perform rituals and prayers along the banks of the sacred Ganges River. Witness mesmerizing Ganga Aarti ceremonies, take a boat ride at sunrise, and explore the narrow alleys of the ancient city.",
      header: "images/varanasi_ghats.jpg",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Fatehpur Sikri",
      description: "Step back in time at Fatehpur Sikri, a UNESCO World Heritage Site and former Mughal capital built by Emperor Akbar in the 16th century. Explore magnificent palaces, courtyards, and mosques adorned with exquisite architectural details.",
      header: "images/fatehpur_sikri.jpg",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Ayodhya",
      description: "Discover the sacred city of Ayodhya, revered as the birthplace of Lord Rama in Hindu mythology. Visit the Ram Janmabhoomi Temple, Hanuman Garhi, and other religious sites that attract pilgrims and tourists from around the world.",
      header: "images/ayodhya.jpg",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Allahabad Sangam",
      description: "Witness the confluence of the Ganges, Yamuna, and mythical Saraswati rivers at Allahabad Sangam, a sacred pilgrimage site for Hindus. Attend the Kumbh Mela, the world's largest religious gathering, and take a dip in the holy waters for spiritual purification.",
      header: "images/allahabad_sangam.jpg",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Agra Fort",
      description: "Explore the grandeur of Agra Fort, a UNESCO World Heritage Site and formidable Mughal fortress that served as the seat of power for generations of emperors. Marvel at its red sandstone walls, elegant palaces, and commanding views of the Taj Mahal.",
      header: "images/agra_fort.jpg",
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mathura-Vrindavan",
      description: "Immerse yourself in the divine aura of Mathura-Vrindavan, the sacred land associated with the childhood and teachings of Lord Krishna. Visit temples, participate in colorful Holi celebrations, and experience the spiritual fervor of this holy pilgrimage site.",
      header: "images/mathura_vrindavan.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Lucknow Residency",
      description: "Delve into the colonial history of Lucknow Residency, a British-era complex that witnessed the Siege of Lucknow during the Indian Rebellion of 1857. Explore the ruins, museums, and gardens that narrate the tales of resilience and valor.",
      header: "images/lucknow_residency.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Sarnath",
      description: "Visit the sacred Buddhist site of Sarnath, where Lord Buddha delivered his first sermon after attaining enlightenment. Explore ancient stupas, monasteries, and the renowned Dhamek Stupa, which marks the spot of Buddha's teachings.",
      header: "images/sarnath.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Kanpur Gardens",
      description: "Relax amidst the lush greenery of Kanpur Gardens, a peaceful retreat in the heart of the bustling city. Enjoy leisurely walks, boating in the lakes, and picnics with family and friends amidst beautiful flower beds and manicured lawns.",
      header: "images/kanpur_gardens.jpg",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  