import { CheckIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import type { LegacyRef } from "react";
import { useEffect, useRef, useState } from "react";
import type { FeedbackType } from "src/types/infer";

type Props = FeedbackType;

const Item: React.FC<Props> = ({
  id,
  user,
  feedback,
  createdAt,
  bio,
  published,
}) => {
  const publish = api.feedbacks.publish.useMutation();
  const edit = api.feedbacks.edit.useMutation();

  const editRef: LegacyRef<HTMLTextAreaElement> = useRef(null);
  const [checked, setCheck] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [review, setReview] = useState(feedback);

  const handleEdit = async () => {
    if (!isEdit) {
      setEdit(true);
      return;
    }
    const newEdit = editRef.current?.value;
    if (!newEdit || feedback === newEdit) return;
    try {
      await edit.mutateAsync({ id, feedback: newEdit });
      setEdit(false);
    } catch (error) {}
  };

  useEffect(() => {
    if (edit.data) setReview(edit.data);
    else setReview(feedback);
  }, [edit.data, feedback]);

  useEffect(() => {
    if (typeof publish.data === "boolean") setCheck(publish.data);
    else setCheck(published);
  }, [publish.data, published]);

  return (
    <div className="bb rounded-lg p-4">
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-black/5 dark:bg-white/5">
          {user?.image && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={user?.image || ""}
              alt=""
              className="absolute inset-0 object-cover"
            />
          )}
        </div>
        <div>
          <h3 className="mt-2 font-medium leading-none">{user?.name}</h3>
          <p className="c-secondary mt-0.5 text-sm">{bio}</p>
        </div>
      </div>
      {isEdit ? (
        <textarea
          disabled={edit.isLoading}
          ref={editRef}
          defaultValue={review}
          className="bb my-3 w-full px-2 py-1"
        />
      ) : (
        <p className="my-3">{review}</p>
      )}

      <p className="c-secondary mb-2 text-sm">{createdAt.toDateString()}</p>
      <div className="flex items-center justify-between">
        <label
          className={`relative inline-flex cursor-pointer items-center ${
            publish.isLoading ? "opacity-50" : ""
          }`}
        >
          <input
            disabled={publish.isLoading}
            type="checkbox"
            checked={checked}
            className="peer sr-only"
            onChange={(e) =>
              publish.mutate({ id, published: e.target.checked })
            }
          />
          <div className="peer h-5 w-9 rounded-full bg-zinc-200 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full  after:border-zinc-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full dark:bg-zinc-700"></div>
          <span className="ml-3 text-sm font-medium">Published</span>
        </label>
        <div className="flex items-center space-x-2">
          <button
            disabled={edit.isLoading}
            className="p-1"
            /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
            onClick={handleEdit}
          >
            {isEdit ? (
              <CheckIcon className="h-5 w-5 text-green-500" />
            ) : (
              <PencilSquareIcon className="h-4 w-4 text-blue-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
