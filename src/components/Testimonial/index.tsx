"use client";

import useEmblaCarousel from "embla-carousel-react";
import Title from "@components/Title";
import Review from "./Review";
import type { ReviewType } from "src/types/review";
import Dots from "./Dots";
import { handleHoverEffect } from "@utils/hoverCardEffect";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Role } from "src/types/next-auth.d";

const upworkUrl =
  "https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png";

const reviews: ReviewType[] = [
  {
    name: "Upwork Client",
    avatar: upworkUrl,
    review:
      "Good freelancer but my account was pending some docs so had to end it, not his fault. Great developer. Very very good and fast.",
    rating: 5,
  },
  {
    name: "Upwork Client",
    avatar: upworkUrl,
    review:
      "Asilbek is a good developer! He did the task within the given time with no problems whatsoever. Give him a chance!",
    rating: 5,
  },
];

const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
  });
  const { data: session } = useSession();

  return (
    <section id="testimonial" className="section sTo overflow-hidden">
      <div
        className="container"
        onMouseMove={handleHoverEffect}
        id="hover-cards"
      >
        <Title title="Testimonial" desc="People saying" />
        {session?.user?.role !== Role.ADMIN && (
          <div className="mb-10 w-fit">
            <Link href="/dashboard/give-a-feedback">
              <button className="btn flex items-center gap-2 px-3">
                <PlusIcon className="w-5" />
                Give me a feedback
              </button>
            </Link>
          </div>
        )}
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
