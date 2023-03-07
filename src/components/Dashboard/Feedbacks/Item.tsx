import LoadingOverlay from "@components/Overlay/Loading";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import type { LegacyRef } from "react";
import { useEffect, useRef, useState } from "react";
import type { FeedbackType } from "src/types/infer";

interface Props extends FeedbackType {
  refetch: () => void;
}

const Item: React.FC<Props> = ({
  id,
  user,
  feedback,
  createdAt,
  bio,
  published,
  rating,
  refetch,
}) => {
  const publish = api.feedbacks.publish.useMutation();
  const edit = api.feedbacks.edit.useMutation();
  const dl = api.feedbacks.delete.useMutation();

  const editRef: LegacyRef<HTMLTextAreaElement> = useRef(null);
  const [isEdit, setEdit] = useState(false);
  const [review, setReview] = useState(feedback);
  const loading = publish.isLoading || edit.isLoading || dl.isLoading;

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

  const handleDelete = async () => {
    try {
      const rs = await dl.mutateAsync({ id });
      if (rs) refetch();
    } catch (error) {}
  };

  useEffect(() => {
    if (edit.data) setReview(edit.data);
    else setReview(feedback);
  }, [edit.data, feedback]);

  return (
    <div className="bb relative h-fit rounded-lg p-4">
      {loading && <LoadingOverlay />}
      <div className="flex items-center gap-4">
        <div
          className={`relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ${
            user.image ? "" : "bg-black/5 dark:bg-white/5"
          }`}
        >
          {user?.image && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={user?.image || ""}
              alt=""
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          )}
        </div>
        <div className="flex-1">
          <h3 className="mt-2 font-medium leading-none">{user?.name}</h3>
          <p className="c-secondary mt-0.5 text-sm">{bio}</p>
        </div>
        {rating && (
          <div className="flex items-center space-x-1">
            <span className="mt-0.5 text-sm font-medium">{rating}</span>
            <StarIcon className="h-5 w-5 fill-yellow-500" />
          </div>
        )}
      </div>
      {isEdit ? (
        <textarea
          disabled={loading}
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
            loading ? "opacity-50" : ""
          }`}
        >
          <input
            disabled={loading}
            type="checkbox"
            checked={publish.data ?? published}
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
            disabled={loading}
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
          <button
            disabled={loading}
            className="p-1"
            /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
            onClick={handleDelete}
          >
            <TrashIcon className="h-4 w-4 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
