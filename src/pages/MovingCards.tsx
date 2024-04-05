import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function MovingCards() {
  return (
     <div className=" dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] items-center justify-center relative overflow-hidden">

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
     
  );
}

const testimonials = [
 {
  name:"1",
  image:"temple/temple3.png",
  link:"#features"
 },
 {
  name:"3",
  image:"temple/temple2.jpg",
  link:"#features"
 },
 {
  name:"4",
  image:"temple/temple1.jpg",
  link:"#features"
 },
 
 {
  name:"5",
  image:"temple/taj.jpg",
  link:"#features"
 },
 {
  name:"6",
  image:"temple/temple3.png",
  link:"#features"
 },
];