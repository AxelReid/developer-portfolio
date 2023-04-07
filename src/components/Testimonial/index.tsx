"use client";

import useEmblaCarousel from "embla-carousel-react";
import Title from "@components/Title";
import Review from "./Review";
import Dots from "./Dots";
import { handleHoverEffect } from "@utils/hoverCardEffect";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Role } from "src/types/next-auth.d";
import { api } from "@utils/api";

const Testimonial = () => {
  const feedbacks = api.feedbacks.getAll.useQuery({
    includeUnPublished: false,
  });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
  });
  const { data: session } = useSession();

  return (
    <section id="testimonial" className="sTo overflow-hidden pt-28 pb-28">
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
        {!feedbacks.isLoading && (
          <div className="embla pr-4 xl:pr-0" ref={emblaRef}>
            <div className="embla__container flex items-stretch space-x-4 ">
              {feedbacks.data?.map((feed, i) => (
                <Review key={i} {...feed} />
              ))}
            </div>
          </div>
        )}
        {feedbacks?.data && (
          <Dots length={feedbacks.data?.length} emblaApi={emblaApi} />
        )}
      </div>
    </section>
  );
};

export default Testimonial;
