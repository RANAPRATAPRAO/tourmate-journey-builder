import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffect() {
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
//[
//   {
//     title: "Stripe",
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     link: "https://stripe.com",
//   },
//   {
//     title: "Netflix",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     link: "https://netflix.com",
//   },
//   {
//     title: "Google",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     link: "https://google.com",
//   },
//   {
//     title: "Meta",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "https://meta.com",
//   },
//   {
//     title: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
// ];


[
    {
      title: "Taj Mahal",
      description: "An iconic marble mausoleum in Agra, India, renowned as one of the New Seven Wonders of the World and a masterpiece of Mughal architecture.",
      link: "https://www.tajmahal.gov.in/"
    },
    {
      title: "Jaipur",
      description: "The capital city of Rajasthan, known as the 'Pink City' for its distinctive pink-hued buildings and vibrant culture, featuring attractions like Amer Fort and Hawa Mahal.",
      link: "https://www.tourism.rajasthan.gov.in/jaipur.html"
    },
    {
      title: "Varanasi",
      description: "One of the world's oldest continually inhabited cities, situated on the banks of the Ganges River in Uttar Pradesh, India, known for its spiritual significance and ancient temples.",
      link: "https://varanasi.nic.in/"
    },
    {
      title: "Kerala Backwaters",
      description: "A network of interconnected rivers, lakes, and canals in the Indian state of Kerala, offering scenic boat cruises through lush landscapes, coconut groves, and quaint villages.",
      link: "https://www.keralatourism.org/"
    },
    {
      title: "Goa",
      description: "India's smallest state, renowned for its pristine beaches, vibrant nightlife, and Portuguese colonial heritage, attracting visitors with its laid-back atmosphere and water sports.",
      link: "https://www.goatourism.gov.in/"
    },
    {
      title: "Agra Fort",
      description: "A UNESCO World Heritage Site and historic fort in Agra, India, built by the Mughal emperors and known for its impressive architecture and panoramic views of the Taj Mahal.",
      link: "https://www.tajmahal.gov.in/agrafort.html"
    },
    {
      title: "Mysore Palace",
      description: "The former royal residence of the Wadiyar dynasty in Mysore, Karnataka, India, renowned for its Indo-Saracenic architecture, intricate artwork, and opulent interiors.",
      link: "https://mysorepalace.gov.in/"
    },
    {
      title: "Ranthambore National Park",
      description: "A renowned wildlife sanctuary in Rajasthan, India, known for its population of Bengal tigers, as well as diverse flora and fauna, set amidst the backdrop of ancient ruins and scenic landscapes.",
      link: "https://www.ranthamborenationalpark.com/"
    },
    {
      title: "Darjeeling",
      description: "A picturesque hill station in the Indian state of West Bengal, famous for its tea plantations, stunning views of the Himalayas, and the UNESCO World Heritage-listed Darjeeling Himalayan Railway.",
      link: "https://www.darjeeling.gov.in/"
    }
  ];
  
