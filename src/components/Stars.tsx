import { useCallback } from "react";
import type { RatingType } from "src/types/review";

const Stars: React.FC<{ rating: RatingType }> = ({ rating }) => {
  const star = useCallback(
    (rate: RatingType) => {
      return (
        <svg
          aria-hidden="true"
          className={`h-5 w-5 ${
            rate <= rating
              ? "text-yellow-500"
              : "text-zinc-200 dark:text-zinc-700"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    },
    [rating]
  );
  return (
    <div className="flex items-center">
      {star(1)}
      {star(2)}
      {star(3)}
      {star(4)}
      {star(5)}
    </div>
  );
};
export default Stars;
