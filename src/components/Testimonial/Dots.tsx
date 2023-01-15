import type { EmblaCarouselType } from "embla-carousel-react";
import { useState } from "react";

interface Props {
  length: number;
  emblaApi: EmblaCarouselType | undefined;
}

const Dots: React.FC<Props> = ({ length, emblaApi }) => {
  const [active, setActive] = useState(0);

  const handleClick = (i: number) => {
    emblaApi?.scrollTo(i);
    setActive(i);
  };

  return (
    <div className="mt-10 flex items-center justify-center space-x-2.5">
      {!!length &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        [...Array(Math.ceil(length / 3))].map((_, i) => {
          const index = i * 3;
          return (
            <div
              onClick={() => handleClick(index)}
              key={i}
              className={`h-3 w-3 cursor-pointer rounded-full
              ${
                index === active
                  ? "bg-zinc-700 dark:bg-zinc-300"
                  : "bg-black/10 dark:bg-zinc-700"
              }
               `}
            />
          );
        })}
    </div>
  );
};

export default Dots;
