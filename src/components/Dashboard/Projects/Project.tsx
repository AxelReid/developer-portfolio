import {
  CodeBracketIcon,
  LinkIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import type { ProjectType } from "src/types/infer";

type Props = ProjectType;

const Project: React.FC<Props> = ({ id, title, categoryIds, tagIds }) => {
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
        <div className="br h-28 w-28 rounded-lg"></div>
        <div className="flex-grow">
          <h2 className="mb-1 text-lg">{title}</h2>
          <div className="w-fit">
            <div className="flex items-center space-x-2 text-sm">
              <span className="c-secondary w-24">Categories:</span>
              <span className="font-medium">{categoryIds.length}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="c-secondary w-24">Tags:</span>
              <span className="font-medium">{tagIds.length}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex space-x-4">
        <button className="p-1">
          <LinkIcon className="h-4 w-4" />
        </button>
        <button className="p-1">
          <CodeBracketIcon className="h-4 w-4" />
        </button>
        <button className="p-1 text-blue-500">
          <PencilSquareIcon className="h-4 w-4" />
        </button>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <button className="p-1 text-red-500" onClick={() => remove(id)}>
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Project;
