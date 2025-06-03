"use client";

import Title from "@components/Title";
import Review from "./Review";
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
  const { data: session } = useSession();

  return (
    <section id="testimonial" className="sTo">
      <Title title="Testimonial" desc="People saying" />
      <div
        className="content container mb-28"
        onMouseMove={handleHoverEffect}
        id="hover-cards"
      >
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

        <div
          className="columns-2 [column-gap:0.75rem] md:[column-gap:1rem] lg:columns-3"
          style={{}}
        >
          {!feedbacks.isLoading &&
            feedbacks.data?.map((feed, i) => <Review key={i} {...feed} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
