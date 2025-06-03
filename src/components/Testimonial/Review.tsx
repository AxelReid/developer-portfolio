import Stars from "@components/Stars";
import type { FeedbackType } from "src/types/infer";
import type { RatingType } from "src/types/review";

const Review: React.FC<FeedbackType> = ({ rating, feedback, bio, user }) => {
  return (
    <div
      id="hover-card"
      className="mb-3 inline-block w-full break-inside-avoid rounded-xl p-4 sm:p-5 md:mb-4"
    >
      <span id="hover-card-overlay" />
      <p className={`text-base`}>{feedback}</p>
      <div className="mt-6 flex items-center space-x-3">
        <div
          className={`relative h-12 w-12 overflow-hidden rounded-full ${
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
          <div>
            {rating ? (
              <div className="mb-1">
                <Stars rating={rating as RatingType} />
              </div>
            ) : null}
          </div>
          <p className="c-secondary text-sm  leading-none">
            {user.name}
            {bio ? ", " + bio : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
