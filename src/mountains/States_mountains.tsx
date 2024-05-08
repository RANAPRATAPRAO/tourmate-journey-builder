import React, { useState } from "react";
import { DirectionAwareHover } from "../components/ui/mountains";

interface Mountain {
  name: string;
  imageUrl: string;
  details: string;
}

interface StateWithMountains {
  name: string;
  mountains: Mountain[];
}

const statesWithMountains = [
  {
    name: "Jammu and Kashmir",
    mountains: [
      {
        name: "Mount Everest",
        imageUrl:     "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: "Mount Everest is the highest mountain in the world.",
      },
      {
        name: "K2",
        imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: "K2 is the second highest mountain in the world.",
      },
      {
        name: "Nanda Devi",
        imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: "Nanda Devi is the highest mountain entirely within India.",
      },
      {
        name: "Kangchenjunga",
        imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        details: "Kangchenjunga is the third highest mountain in the world.",
      },
      // Add more mountains as needed
    ],
  },
  {
    name: "Himachal Pradesh",
    mountains: [
      {
        name: "Hanuman Tibba",
        imageUrl: "https://example.com/hanuman-tibba.jpg",
        details:
          "Hanuman Tibba is one of the highest mountains in the Dhauladhar range.",
      },
      {
        name: "Shilla",
        imageUrl: "https://example.com/shilla.jpg",
        details: "Shilla is a mountain peak in the Pir Panjal Range.",
      },
      {
        name: "Deo Tibba",
        imageUrl: "https://example.com/deo-tibba.jpg",
        details:
          "Deo Tibba is a beautiful mountain located in the Kullu Valley.",
      },
      {
        name: "Indrasan",
        imageUrl: "https://example.com/indrasan.jpg",
        details: "Indrasan is a prominent mountain in the Pir Panjal range.",
      },
      // Add more mountains as needed
    ],
  },
  {
    name: "Uttarakhand",
    mountains: [
      {
        name: "Trishul",
        imageUrl: "https://example.com/trishul.jpg",
        details: "Trishul is a group of three Himalayan mountain peaks.",
      },
      {
        name: "Nanda Devi",
        imageUrl: "https://example.com/nanda-devi-uttarakhand.jpg",
        details: "Nanda Devi is the highest mountain entirely within India.",
      },
      {
        name: "Chaukhamba",
        imageUrl: "https://example.com/chaukhamba.jpg",
        details:
          "Chaukhamba is a majestic mountain massif in the Garhwal Himalayas.",
      },
      {
        name: "Shivling",
        imageUrl: "https://example.com/shivling.jpg",
        details:
          "Shivling is a stunning mountain peak in the Gangotri Group of the Garhwal Himalayas.",
      },
      // Add more mountains as needed
    ],
  },
  {
    name: "Sikkim",
    mountains: [
      {
        name: "Kangchenjunga",
        imageUrl: "https://example.com/kangchenjunga-sikkim.jpg",
        details: "Kangchenjunga is the third highest mountain in the world.",
      },
      {
        name: "Kabru",
        imageUrl: "https://example.com/kabru.jpg",
        details:
          "Kabru is a mountain in the Himalayas on the border between eastern Nepal and India.",
      },
      {
        name: "Pandim",
        imageUrl: "https://example.com/pandim.jpg",
        details: "Pandim is a peak in the Indian state of Sikkim.",
      },
      {
        name: "Siniolchu",
        imageUrl: "https://example.com/siniolchu.jpg",
        details:
          "Siniolchu is one of the tallest mountains in the Indian state of Sikkim.",
      },
      // Add more mountains as needed
    ],
  },
  {
    name: "Arunachal Pradesh",
    mountains: [
      {
        name: "Gorichen",
        imageUrl: "https://example.com/gorichen.jpg",
        details: "Gorichen is the highest peak in Arunachal Pradesh.",
      },
      {
        name: "Kangto",
        imageUrl: "https://example.com/kangto.jpg",
        details: "Kangto is the highest peak in the Eastern Himalayas.",
      },
      {
        name: "Nyegi Kangsang",
        imageUrl: "https://example.com/nyegi-kangsang.jpg",
        details: "Nyegi Kangsang is a prominent peak in the Eastern Himalayas.",
      },
      {
        name: "Namcha Barwa",
        imageUrl: "https://example.com/namcha-barwa.jpg",
        details:
          "Namcha Barwa is one of the most beautiful peaks in the world.",
      },
      // Add more mountains as needed
    ],
  },
  {
    name: "Manipur",
    mountains: [
      {
        name: "Siroi Hill",
        imageUrl: "https://example.com/siroi-hill.jpg",
        details: "Siroi Hill is one of the tallest peaks in Manipur.",
      },
      {
        name: "Kisha",
        imageUrl: "https://example.com/kisha.jpg",
        details: "Kisha is a mountain located in the Manipur Hills.",
      },
      // Add more mountains as needed
    ],
  },
  {
    name: "Uttar Pradesh",
    mountains: [
      {
        name: "Nanda Devi",
        imageUrl: "https://example.com/nanda-devi-up.jpg",
        details: "Nanda Devi is the highest mountain entirely within India.",
      },
      {
        name: "Kamet",
        imageUrl: "https://example.com/kamet.jpg",
        details:
          "Kamet is the second highest mountain in the Garhwal region of Uttarakhand.",
      },
      {
        name: "Shivling",
        imageUrl: "https://example.com/shivling-up.jpg",
        details:
          "Shivling is a stunning mountain peak in the Garhwal Himalayas.",
      },
      {
        name: "Dunagiri",
        imageUrl: "https://example.com/dunagiri.jpg",
        details:
          "Dunagiri is a mountain in the Garhwal Himalayas of Uttarakhand.",
      },
      // Add more mountains as needed
    ],
  },
  {
    name: "Nepal",
    mountains: [
      {
        name: "Makalu",
        imageUrl: "states/kashmir.jpeg",
        details: "Makalu is the fifth highest mountain in the world.",
      },
    ],
  },
  // Add other states similarly
];

const Mountains: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedMountains, setSelectedMountains] = useState<Mountain[]>([]);

  const handleStateClick = (stateName: string) => {
    const state = statesWithMountains.find((state) => state.name === stateName);
    if (state) {
      setSelectedMountains(state.mountains);
      setSelectedState(stateName);
    }
  };

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] overflow-hidden">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-3xl text-green-200 mb-3 font-bold ">
          States with Mountains in India
        </h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {statesWithMountains.map((state, index) => (
            <button
              key={index}
              className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded"
              onClick={() => handleStateClick(state.name)}
            >
              {state.name}
            </button>
          ))}
        </div>
        {selectedState && (
          <div className="mt-10">
            <h2 className="text-2xl text-green-200 font-bold mb-3 text-center">
              Mountains in {selectedState}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
              {selectedMountains.map((mountain, index) => (
                
                  <div key={index}>
                    <DirectionAwareHover imageUrl={mountain.imageUrl}>
                      <p className="font-bold text-xl">{mountain.name}</p>
                      <p className="font-normal text-sm">{mountain.details}</p>
                    </DirectionAwareHover>
                  </div>
                
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mountains;
