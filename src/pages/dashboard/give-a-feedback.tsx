import DashboardWrapper from "@components/Dashboard/DashboardWrapper";
import { api } from "@utils/api";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import type { FormEvent } from "react";
import { useState } from "react";

const GiveAFeedback: NextPage = () => {
  const { data: session } = useSession();
  const feedback = api.feedbacks.getMine.useQuery();
  const give = api.feedbacks.add.useMutation({
    onSuccess: () => feedback.refetch(),
  });

  const [input, setInput] = useState({
    bio: "",
    feedback: "",
    rating: undefined,
  });

  const handleInput = ({ name, value }: { name: string; value: string }) =>
    setInput((prev) => ({ ...prev, [name]: value }));

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!input.bio || !input.feedback) return;
      const res = await give.mutateAsync(input);
      console.log(res);
    } catch (error) {}
  };

  return (
    <DashboardWrapper>
      {feedback.isLoading ? (
        "Loading..."
      ) : feedback.data ? (
        "You already gave a feedback"
      ) : (
        <div className="max-w-sm">
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
                {session?.user?.name || "Asilbek"}
              </h3>
              <p className="c-secondary text-sm">{input.bio}</p>
            </div>
          </div>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={submit} className="mt-5 flex flex-col">
            <input
              type="text"
              name="bio"
              placeholder="Bio"
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
            <button className="btn btn-darker mt-3 w-fit px-3 font-medium">
              Send feedback
            </button>
          </form>
        </div>
      )}
    </DashboardWrapper>
  );
};

export default GiveAFeedback;
