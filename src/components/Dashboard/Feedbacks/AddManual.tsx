import FileUploader, { LoadedImg } from "@components/FileUploader";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import { uploader } from "@utils/uploader";
import { LegacyRef, memo, useRef, useState } from "react";
import { FeedbackAddManualInput } from "src/types/infer";

const placeholder = {
  name: "Name",
  bio: "Bio",
};

interface Props {
  refetch: () => void;
}

const AddManual: React.FC<Props> = ({ refetch }) => {
  const add = api.feedbacks.addManual.useMutation({
    onSuccess: () => refetch(),
  });

  const [avatar, setAvatar] = useState<LoadedImg[]>([]);
  const nameRef: LegacyRef<HTMLHeadingElement> = useRef(null);
  const bioRef: LegacyRef<HTMLParagraphElement> = useRef(null);
  const reviewRef: LegacyRef<HTMLTextAreaElement> = useRef(null);

  const submit = async () => {
    try {
      const bio = bioRef.current?.innerText,
        name = nameRef.current?.innerText,
        feedback = reviewRef.current?.value;
      if (!bio || !name || !feedback) return;
      if (!avatar.length) return;
      const imgUrl = await uploader(avatar[0] as LoadedImg);
      if (!imgUrl) return;
      const data: FeedbackAddManualInput = {
        avatar: imgUrl,
        bio,
        feedback,
        name,
      };
      add.mutate(data);
      reset();
    } catch (error) {}
  };
  const reset = () => {
    if (nameRef.current) nameRef.current.innerText = placeholder.name;
    if (bioRef.current) bioRef.current.innerText = placeholder.bio;
    if (reviewRef.current) reviewRef.current.value = "";
    setAvatar([]);
  };

  return (
    <div className="bb h-fit rounded-lg p-4">
      <div className="flex items-center gap-4">
        {avatar.length ? (
          <div className="relative isolate flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-black/5 dark:bg-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatar[0]?.preview}
              className="absolute inset-0 -z-[1] object-cover"
              alt=""
            />
            <button
              className="b rounded-full !bg-opacity-80 p-1"
              onClick={() => setAvatar([])}
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <FileUploader
            images={avatar}
            setImages={setAvatar}
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black/5 dark:bg-white/5"
          >
            <PlusIcon className="w-5" />
          </FileUploader>
        )}
        <div>
          <h3
            ref={nameRef}
            className="mt-2 font-medium leading-none outline-0"
            contentEditable
            suppressContentEditableWarning
          >
            {placeholder.name}
          </h3>
          <p
            ref={bioRef}
            className="c-secondary mt-0.5 text-sm outline-0"
            contentEditable
            suppressContentEditableWarning
          >
            {placeholder.bio}
          </p>
        </div>
      </div>
      <textarea ref={reviewRef} className="bb mt-3 w-full px-2 py-1" />
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
  );
};

export default memo(AddManual);
