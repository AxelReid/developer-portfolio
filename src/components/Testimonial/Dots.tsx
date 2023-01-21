import type { EmblaCarouselType } from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

interface Props {
  length: number;
  emblaApi: EmblaCarouselType | undefined;
}

const Dots: React.FC<Props> = ({ length, emblaApi }) => {
  const [activeIndex, setIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setIndex]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", handleScroll);
      handleScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi]);

  const handleClick = (i: number) => {
    emblaApi?.scrollTo(i);
    setIndex(length < 1 ? 0 : Math.ceil(i / 3));
  };
  if (length < 1) return null;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const dots = [...Array(Math.ceil(length / 3))];

  return (
    <div className="mt-10 flex items-center justify-center space-x-2.5">
      {dots.length > 1 &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        dots.map((_, i) => {
          const index = i * 3;
          return (
            <div
              onClick={() => handleClick(index)}
              key={i}
              className={`h-3 w-3 cursor-pointer rounded-full
              ${
                index === activeIndex
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
