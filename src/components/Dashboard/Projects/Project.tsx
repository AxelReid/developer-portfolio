import {
  CodeBracketIcon,
  LinkIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import type { ProjectType } from "src/types/infer";

interface Props extends ProjectType {
  openEdit: () => void;
}

const Project: React.FC<Props> = ({
  id,
  title,
  categoryIds,
  tagIds,
  demo_link,
  source_link,
  openEdit,
}) => {
  const utils = api.useContext();
  const { mutateAsync, isLoading } = api.project.remove.useMutation({
    onSuccess: async () => {
      await utils.project.invalidate();
      await utils.category.getAll.invalidate();
      await utils.tags.getAll.invalidate();
    },
  });

  const remove = async (id: string) => {
    await mutateAsync({ id });
  };

  return (
    <div key={id} className="bb relative rounded-lg px-4 py-3">
      {isLoading && (
        <div className="b absolute inset-0 rounded-[inherit] opacity-70" />
      )}
      <div className="flex gap-4">
        <div className="br aspect-square h-20 flex-shrink-0 rounded-lg md:h-28"></div>
        <div className="flex-1">
          <h2 className="mb-2 text-lg leading-5">{title}</h2>
          <div className="flex items-center space-x-2 text-xs">
            <span className="c-secondary">Categories:</span>
            <span className="font-medium">{categoryIds.length}</span>
          </div>
          <div className="mt-0.5 flex items-center space-x-2 text-xs">
            <span className="c-secondary">Tags:</span>
            <span className="font-medium">{tagIds.length}</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          {demo_link && (
            <button className="p-1">
              <LinkIcon className="h-4 w-4" />
            </button>
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
  );
};

export default Project;
