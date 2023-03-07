import DashboardWrapper from "@components/Dashboard/DashboardWrapper";
import { Spinner } from "@components/Overlay/Loading";
import Stars from "@components/Stars";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { api } from "@utils/api";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import type { FormEvent } from "react";
import { useState } from "react";
import type { FeedbackAddInput } from "src/types/infer";
import type { RatingType } from "src/types/review";

const GiveAFeedback: NextPage = () => {
  const { data: session } = useSession();
  const feedback = api.feedbacks.getMine.useQuery();
  const give = api.feedbacks.add.useMutation({
    onSuccess: () => feedback.refetch(),
  });

  const [input, setInput] = useState<FeedbackAddInput>({
    bio: "",
    feedback: "",
    rating: undefined,
  });

  const handleInput = ({
    name,
    value,
  }: {
    name: string;
    value: string | number | undefined;
  }) => setInput((prev) => ({ ...prev, [name]: value }));

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!input.feedback) return;
      await give.mutateAsync(input);
    } catch (error) {}
  };

  return (
    <DashboardWrapper>
      {feedback.isLoading ? (
        "Loading..."
      ) : (
        <div className="max-w-sm">
          {feedback.data && (
            <h2 className="mb-10 text-xl font-medium">Your feedback</h2>
          )}
          <div className="flex items-center space-x-5">
            {session?.user?.image && (
              <div className="relative h-[60px] w-[60px] flex-shrink-0 overflow-hidden rounded-full bg-black/5 dark:bg-white/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={session?.user?.image}
                  alt=""
                  className="absolute inset-0 object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl font-medium leading-tight">
                {session?.user?.name}
              </h3>
              <p className="c-secondary text-sm">
                {feedback.data?.bio || input.bio}
              </p>
            </div>
          </div>
          {feedback.data && !feedback.data.rating ? null : (
            <div className="mt-3 flex items-center space-x-2">
              <Stars
                rating={(feedback.data?.rating || input.rating) as RatingType}
                setRating={
                  !feedback.data
                    ? (rate) => handleInput({ name: "rating", value: rate })
                    : undefined
                }
              />
              {!feedback.data && (
                <span className="c-secondary text-xs">(optional)</span>
              )}
              {!feedback.data && !!input.rating && (
                <button
                  onClick={() =>
                    handleInput({ name: "rating", value: undefined })
                  }
                >
                  <XMarkIcon className="h-5 w-5 text-red-500" />
                </button>
              )}
            </div>
          )}
          {feedback.data ? (
            <div className="mt-2">
              <p>{feedback.data.feedback}</p>
              <div className="c-secondary mt-2 text-sm italic">
                {feedback.data.createdAt.toDateString()}
              </div>
            </div>
          ) : (
            /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
            <form onSubmit={submit} className="mt-2 flex flex-col">
              <input
                type="text"
                name="bio"
                placeholder="Bio (optional)"
                className="bb rounded-md text-sm"
                onChange={(e) => handleInput(e.target)}
              />
              <textarea
                name="feedback"
                placeholder="Feedback"
                className="bb mt-2 rounded-md"
                rows={3}
                onChange={(e) => handleInput(e.target)}
              />
              <button
                type="submit"
                className="btn btn-darker relative mt-3 flex w-fit items-center justify-center px-3 font-medium"
              >
                <span className={`${give.isLoading ? "opacity-20" : ""}`}>
                  Send feedback
                </span>
                {give.isLoading && <Spinner className="absolute !h-6 !w-6" />}
              </button>
            </form>
          )}
        </div>
      )}
    </DashboardWrapper>
  );
};

export default GiveAFeedback;
