import React from "react";
import type { ReviewType } from "src/types/review";

const Review: React.FC<ReviewType> = ({ name, avatar, review }) => {
  return (
    <div
      className="embla__slide bb flex-[0_0_calc(100%-10px)]
      rounded-2xl 
      p-8 
      min-[400px]:flex-[0_0_calc(90%-10px)] 
      sm:flex-[0_0_calc(65%-10px)] 
      md:flex-[0_0_calc(50%-10px)] 
      lg:flex-[0_0_calc(40%-10px)] 
      xl:flex-[0_0_calc(33%-20px)]"
    >
      <div className="h-16 w-16 rounded-full bg-black/5 dark:bg-zinc-700"></div>
      <h3 className="mt-7 text-xl font-medium">{name}</h3>
      <p className="c-secondary mt-2 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed
        praesentium voluptate laudantium facilis enim.
      </p>
    </div>
  );
};

export default Review;
