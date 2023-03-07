import type { LoadedImg } from "@components/FileUploader";
import AvatarModal from "@components/Modal/AvatarModal";
import { StarIcon } from "@heroicons/react/20/solid";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import { uploader } from "@utils/uploader";
import type { LegacyRef } from "react";
import { memo, useRef, useState } from "react";
import type { FeedbackAddManualInput, ImageType } from "src/types/infer";
import type { ModalMutableRefProps } from "src/types/modalRef";
interface Props {
  refetch: () => void;
}
type Rate = 0 | 1 | 2 | 3 | 4 | 5;

const AddManual: React.FC<Props> = ({ refetch }) => {
  const add = api.feedbacks.addManual.useMutation({
    onSuccess: () => refetch(),
  });

  const [rating, setRating] = useState<Rate>(0);
  const [avatar, setAvatar] = useState<LoadedImg | ImageType | undefined>(
    undefined
  );
  const modalRef: ModalMutableRefProps = useRef(null);
  const nameRef: LegacyRef<HTMLInputElement> = useRef(null);
  const bioRef: LegacyRef<HTMLInputElement> = useRef(null);
  const reviewRef: LegacyRef<HTMLTextAreaElement> = useRef(null);

  const submit = async () => {
    try {
      const bio = bioRef.current?.value,
        name = nameRef.current?.value,
        feedback = reviewRef.current?.value;

      if (!name || !feedback) return;
      let imageId = null;
      if ((avatar as LoadedImg)?.preview) {
        imageId = await uploader(avatar as LoadedImg);
      }
      if ((avatar as ImageType)?.id) imageId = (avatar as ImageType)?.id;
      const data: FeedbackAddManualInput = {
        feedback,
        name,
      };
      if (bio) data.bio = bio;
      if (imageId) data.imageId = imageId;
      if (rating) data.rating = rating;
      add.mutate(data);
      reset();
    } catch (error) {}
  };
  const reset = () => {
    if (nameRef.current) nameRef.current.value = "";
    if (bioRef.current) bioRef.current.value = "";
    if (reviewRef.current) reviewRef.current.value = "";
    setAvatar(undefined);
    setRating(0);
  };

  return (
    <>
      <div className="bb h-fit rounded-lg p-4">
        <div className="flex items-center gap-4">
          {avatar ? (
            <div className="relative isolate flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-black/5 dark:bg-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  (avatar as LoadedImg)?.preview || (avatar as ImageType)?.url
                }
                className="absolute top-0 left-0 -z-[1] h-full w-full object-cover"
                alt=""
              />
              <button
                className="b rounded-full !bg-opacity-80 p-1"
                onClick={() => setAvatar(undefined)}
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => modalRef.current?.open()}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black/5 dark:bg-white/5"
            >
              <PlusIcon className="w-5" />
            </button>
          )}
          <div className="flex-1">
            <div>
              <input
                ref={nameRef}
                type="text"
                className="bb w-full rounded-lg py-1 px-2 text-sm font-medium"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="mt-0.5 text-sm font-medium">
              {!!rating && rating}
            </span>
            <button
              onClick={() =>
                setRating((prev) => (prev <= 0 ? 5 : prev - 1) as Rate)
              }
            >
              <StarIcon
                className={`h-5 w-5 ${
                  rating ? "fill-yellow-500" : "opacity-40"
                }`}
              />
            </button>
          </div>
        </div>

        <input
          ref={bioRef}
          type="text"
          className="bb mt-3 w-full rounded-lg py-1.5 px-2 text-sm"
          placeholder="Bio (optional)"
        />
        <textarea ref={reviewRef} className="bb mt-2 w-full px-2 py-1" />
        <div className="flex space-x-2">
          <button
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={submit}
            className="btn btn-darker mt-1 w-fit rounded-md py-1.5 px-3 text-sm font-medium"
          >
            Add
          </button>
          <button
            onClick={reset}
            className="btn mt-1 w-fit rounded-md py-1.5 px-3 text-sm font-medium"
          >
            Reset
          </button>
        </div>
      </div>
      <AvatarModal ref={modalRef} avatar={avatar} getAvatar={setAvatar} />
    </>
  );
};

export default memo(AddManual);
