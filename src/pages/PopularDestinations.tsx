import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function PopularDestinations() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] ">
    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Explore popular Destinations in India
        </h2>

    <div className="max-w-5xl mx-auto px-8 ">
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
export const projects = 
[
    {
      title: "Taj Mahal",
      description: "An iconic marble mausoleum in Agra, India, renowned as one of the New Seven Wonders of the World and a masterpiece of Mughal architecture.",
      link: "/TajMahal"
    },
    {
      title: "Jaipur",
      description: "The capital city of Rajasthan, known as the 'Pink City' for its distinctive pink-hued buildings and vibrant culture, featuring attractions like Amer Fort and Hawa Mahal.",
      link: "/Jaipur"
    },
    {
      title: "Varanasi",
      description: "One of the world's oldest continually inhabited cities, situated on the banks of the Ganges River in Uttar Pradesh, India, known for its spiritual significance and ancient temples.",
      link: "/Varansi"
    },
    {
      title: "Kerala Backwaters",
      description: "A network of interconnected rivers, lakes, and canals in the Indian state of Kerala, offering scenic boat cruises through lush landscapes, coconut groves, and quaint villages.",
      link: "/Kerala"
    },
    {
      title: "Goa",
      description: "India's smallest state, renowned for its pristine beaches, vibrant nightlife, and Portuguese colonial heritage, attracting visitors with its laid-back atmosphere and water sports.",
      link: "/Goa"
    },
    {
      title: "Agra Fort",
      description: "A UNESCO World Heritage Site and historic fort in Agra, India, built by the Mughal emperors and known for its impressive architecture and panoramic views of the Taj Mahal.",
      link: "/Agra"
    },
    {
      title: "Mysore Palace",
      description: "The former royal residence of the Wadiyar dynasty in Mysore, Karnataka, India, renowned for its Indo-Saracenic architecture, intricate artwork, and opulent interiors.",
      link: "/Mysore"
    },
    {
      title: "Ranthambore National Park",
      description: "A renowned wildlife sanctuary in Rajasthan, India, known for its population of Bengal tigers, as well as diverse flora and fauna, set amidst the backdrop of ancient ruins and scenic landscapes.",
      link: "/Ranthambore"
    },
    {
      title: "Darjeeling",
      description: "A picturesque hill station in the Indian state of West Bengal, famous for its tea plantations, stunning views of the Himalayas, and the UNESCO World Heritage-listed Darjeeling Himalayan Railway.",
      link: "/Darjeeling"
    }
  ];
  
