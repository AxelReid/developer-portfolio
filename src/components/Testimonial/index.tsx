"use client";

import useEmblaCarousel from "embla-carousel-react";
import Title from "@components/Title";
import Review from "./Review";
import type { ReviewType } from "src/types/review";
import Dots from "./Dots";

const reviews: ReviewType[] = [
  {
    name: "Lorem Ipsum",
    avatar: "",
    review: "",
  },
  {
    name: "Lorem Ipsum",
    avatar: "",
    review: "",
  },
  {
    name: "Lorem Ipsum",
    avatar: "",
    review: "",
  },
  {
    name: "Lorem Ipsum",
    avatar: "",
    review: "",
  },
];

const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
  });
  return (
    <section id="testimonial" className="section overflow-hidden">
      <div className="container">
        <Title title="Testimonial" desc="My client saying" />
        <div className="embla pr-4 xl:pr-0" ref={emblaRef}>
          <div className="embla__container flex items-stretch space-x-5 xl:space-x-10">
            {reviews.map((review, i) => (
              <Review key={i} {...review} />
            ))}
          </div>
        </div>
        <Dots length={reviews.length} emblaApi={emblaApi} />
      </div>
    </section>
  );
};

export default Testimonial;
