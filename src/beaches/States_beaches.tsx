import React, { useState } from "react";
import { DirectionAwareHover } from "../components/ui/mountains";

interface Beaches {
  name: string;
  imageUrl: string;
  details: string;
}

interface  statesWithBeaches{
  name: string;
  mountains: Beaches[];
}

const statesWithBeaches = [
    {
      name: "Goa",
      beaches: [
        {
          name: "Calangute Beach",
          imageUrl: "https://th.bing.com/th/id/OIP.FDQ8abE6cE8-qQcCFsbaZAHaEK?rs=1&pid=ImgDetMain",
          details: "Calangute Beach is known for its golden sand and water sports activities.",
        },
        {
          name: "Baga Beach",
          imageUrl: "https://www.tripsavvy.com/thmb/pSvX01E-etJSN9QBnZtNf0HhTgk=/2090x1435/filters:fill(auto,1)/GettyImages-903398436-5c612e4a46e0fb00017dd31f.jpg",
          details: "Baga Beach is famous for its nightlife and water sports activities.",
        },
        {
          name: "Anjuna Beach",
          imageUrl: "https://th.bing.com/th/id/OSK.HEROPlfh2Rz9vPd_LmT_UQmkcwkkB5Q_7v2Ld3auZhMbzexg?rs=1&pid=ImgDetMain",
          details: "Anjuna Beach is popular among backpackers and hosts vibrant flea markets.",
        },
        // Add more beaches in Goa
      ],
    },
    {
      name: "Maharashtra",
      beaches: [
        {
          name: "Juhu Beach",
          imageUrl: "https://th.bing.com/th/id/OIP.fpaQt_Z-q5gewPjt11kZGAHaEK?rs=1&pid=ImgDetMain",
          details: "Juhu Beach is one of the most popular beaches in Mumbai.",
        },
        {
          name: "Alibaug Beach",
          imageUrl: "https://th.bing.com/th/id/R.897f7d755cc268cbcc0d1fa5b0b847ab?rik=EdrHZX5noC4v%2bA&riu=http%3a%2f%2fwww.mumbaiorbit.in%2fimages%2fMumbaiOrbitImages%2fBeach%2fAlibaugBeach%2fAlibaug-Beach-(23).jpg&ehk=P%2ffPrfYL2mGfLMXMBVBTRRkj60sPm13uWYCY5P5Vwvo%3d&risl=&pid=ImgRaw&r=0",
          details: "Alibaug Beach is known for its serene atmosphere and water sports activities.",
        },
        {
          name: "Murud Beach",
          imageUrl: "https://4.bp.blogspot.com/-MfXu41Awb1A/WFkCCVsxRUI/AAAAAAAAIPg/mxRTANP2OiEM1mQ4imTBAENNUUPm5eLAwCLcB/w1200-h630-p-k-no-nu/1.JPG",
          details: "Murud Beach offers breathtaking views and is ideal for relaxation.",
        },
        // Add more beaches in Maharashtra
      ],
    },
    {
      name: "Kerala",
      beaches: [
        {
          name: "Kovalam Beach",
          imageUrl: "https://th.bing.com/th/id/OSK.HEROPPPTQRffAFDgSeh7GbFpv_LMeFPuTdSZ3F_V0lIatotc?rs=1&pid=ImgDetMain",
          details: "Kovalam Beach is famous for its crescent-shaped coastline and pristine waters.",
        },
        {
          name: "Varkala Beach",
          imageUrl: "http://www.keralaleisureholidays.com/wp-content/uploads/2014/07/varkala_papanasam-beach.jpg",
          details: "Varkala Beach is renowned for its cliffs and mineral springs.",
        },
        {
          name: "Marari Beach",
          imageUrl: "https://keralatourism.travel/images/places-to-visit/headers/marari-beach-alleppey-tourism-entry-fee-timings-holidays-reviews-header.jpg",
          details: "Marari Beach is a peaceful retreat with palm-fringed shores.",
        },
        // Add more beaches in Kerala
      ],
    },
    {
      name: "Tamil Nadu",
      beaches: [
        {
          name: "Marina Beach",
          imageUrl: "https://th.bing.com/th/id/OLC.TxQnoqJLo6YBcw480x360?rs=1&pid=ImgDetMain",
          details: "Marina Beach is the longest urban beach in India and offers panoramic views.",
        },
        {
          name: "Kanyakumari Beach",
          imageUrl: "https://th.bing.com/th?id=OLC.B4j%2fMmSBHuCF0w480x360&rs=1&pid=ImgDetMain",
          details: "Kanyakumari Beach is famous for its sunrise and sunset views.",
        },
        {
          name: "Covelong Beach",
          imageUrl: "https://chennaitourism.travel/images/tourist-places/covelong-beach-chennai/covelong-beach-chennai-tourism-entry-ticket-boating-price.jpg",
          details: "Covelong Beach is ideal for surfing and other water sports activities.",
        },
        // Add more beaches in Tamil Nadu
      ],
    },
    // Add more states and their beaches similarly
  ];
  

export const Beaches1: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedMountains, setSelectedMountains] = useState<Beaches[]>([]);

  const handleStateClick = (stateName: string) => {
    const state = statesWithBeaches.find((state) => state.name === stateName);
    if (state) {
      setSelectedMountains(state.beaches);
      setSelectedState(stateName);
    }
  };

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] overflow-hidden">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-3xl text-green-200 mb-3 font-bold ">
          States with Beaches in India
        </h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {statesWithBeaches.map((state, index) => (
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
              Beaches in {selectedState}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
              {selectedMountains.map((beach, index) => (
                
                  <div key={index}>
                    <DirectionAwareHover imageUrl={beach.imageUrl}>
                      <p className="font-bold text-xl">{beach.name}</p>
                      <p className="font-normal text-sm">{beach.details}</p>
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

