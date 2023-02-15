import Stars from "@components/Stars";
import type { ReviewType } from "src/types/review";

const Review: React.FC<ReviewType> = ({ name, avatar, review, rating }) => {
  return (
    <div
      id="hover-card"
      className="embla__slide flex-[0_0_calc(100%-10px)]
      rounded-2xl 
      p-8 
      min-[400px]:flex-[0_0_calc(90%-10px)] 
      sm:flex-[0_0_calc(65%-10px)] 
      md:flex-[0_0_calc(50%-10px)] 
      lg:flex-[0_0_calc(40%-10px)] 
      xl:flex-[0_0_calc(33%-20px)]"
    >
      <span id="hover-card-overlay" />
      <div className="flex items-center space-x-5">
        <div className="relative h-[60px] w-[60px] rounded-full bg-black/5 dark:bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatar} alt="" className="absolute inset-0 object-cover" />
        </div>
        <div>
          <h3 className="mb-1 text-xl font-medium">{name}</h3>
          {rating ? <Stars rating={rating} /> : null}
        </div>
      </div>
      <p className="c-secondary text-md mt-5 md:text-lg">{review}</p>
    </div>
  );
};

export default Review;
