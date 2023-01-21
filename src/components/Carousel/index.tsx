import useEmblaCarousel from "embla-carousel-react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

// embla__slide
const Carousel: React.FC<Props> = ({ children, className = "" }) => {
  const [emblaRef] = useEmblaCarousel({
    containScroll: "trimSnaps",
  });

  return (
    <div className="embla" ref={emblaRef}>
      <div className={`embla__container flex items-stretch ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Carousel;
