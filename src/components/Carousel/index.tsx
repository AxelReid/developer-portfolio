import useEmblaCarousel from "embla-carousel-react";

interface Props {
  children: React.ReactNode;
  className?: string;
  rootClassName?: string;
}

// embla__slide
const Carousel: React.FC<Props> = ({
  children,
  className = "",
  rootClassName = "",
}) => {
  const [emblaRef] = useEmblaCarousel({
    containScroll: "trimSnaps",
  });

  return (
    <div className={`embla ${rootClassName}`} ref={emblaRef}>
      <div className={`embla__container flex items-stretch ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Carousel;
