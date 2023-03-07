import Stars from "@components/Stars";
import type { FeedbackType } from "src/types/infer";
import type { RatingType } from "src/types/review";

const Review: React.FC<FeedbackType> = ({ rating, feedback, bio, user }) => {
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
        <div
          className={`relative h-[60px] w-[60px] overflow-hidden rounded-full ${
            user.image ? "" : "bg-black/5 dark:bg-white/5"
          }`}
        >
          {user.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.image}
              alt=""
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          )}
        </div>
        <div>
          <h3 className="mb-1 text-xl font-medium leading-none">{user.name}</h3>
          <p className="c-secondary text-sm">{bio}</p>
        </div>
      </div>
      {rating ? (
        <div className="mt-4">
          <Stars rating={rating as RatingType} />
        </div>
      ) : null}

      <p
        className={`c-secondary text-md md:text-lg ${rating ? "mt-4" : "mt-5"}`}
      >
        {feedback}
      </p>
    </div>
  );
};

export default Review;
