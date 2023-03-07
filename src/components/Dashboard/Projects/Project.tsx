import LoadingOverlay from "@components/Overlay/Loading";
import {
  CodeBracketIcon,
  LinkIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import Image from "next/image";
import Link from "next/link";
import type { ProjectType } from "src/types/infer";

interface Props extends ProjectType {
  openEdit: () => void;
}

const Project: React.FC<Props> = ({
  id,
  title,
  image,
  tagIds,
  demo_link,
  source_link,
  published,
  openEdit,
}) => {
  const utils = api.useContext();
  const publish = api.project.publish.useMutation();
  const rm = api.project.remove.useMutation({
    onSuccess: async () => {
      await utils.project.invalidate();
      await utils.tags.getAll.invalidate();
    },
  });
  const loading = publish.isLoading || rm.isLoading;

  const remove = async (id: string) => {
    await rm.mutateAsync({ id });
  };

  return (
    <div key={id} className="bb relative rounded-lg p-3">
      {loading && <LoadingOverlay />}
      <div className="flex gap-4">
        <div className="br relative aspect-square h-20 flex-shrink-0 rounded-lg md:h-28">
          {image?.url && (
            <Image
              src={image.url}
              fill
              className="rounded-[inherit] object-cover"
              alt=""
            />
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h2 className="mb-2 text-lg leading-5">{title}</h2>
            <div className="mt-0.5 flex items-center space-x-2 text-xs">
              <span className="c-secondary">Tags:</span>
              <span className="font-medium">{tagIds.length}</span>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-end space-x-2">
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
              <div className="peer h-4 w-7 rounded-full bg-zinc-200 after:absolute after:top-[2px] after:left-[2px] after:h-3 after:w-3 after:rounded-full  after:border-zinc-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full dark:bg-zinc-700"></div>
            </label>
            {demo_link && (
              <Link href={demo_link} target="_blank" className="p-1">
                <LinkIcon className="h-4 w-4" />
              </Link>
            )}
            {source_link && (
              <button className="p-1">
                <CodeBracketIcon className="h-4 w-4" />
              </button>
            )}
            <button className="p-1 text-blue-500" onClick={openEdit}>
              <PencilSquareIcon className="h-4 w-4" />
            </button>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <button className="p-1 text-red-500" onClick={() => remove(id)}>
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
