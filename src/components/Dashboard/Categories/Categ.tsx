import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import type { FormEvent } from "react";
import { memo, useState } from "react";
import type { CategoryType } from "src/types/infer";

interface Props extends CategoryType {
  update: (
    e: FormEvent<HTMLFormElement>,
    action: "update" | "add",
    id?: string
  ) => Promise<void>;
  remove: (id: string) => Promise<void>;
}

const Categ: React.FC<Props> = ({ id, name, _count, update, remove }) => {
  // const {} = api.category
  const [isEdit, setEdit] = useState(false);
  const toggleEdit = (open?: boolean) => setEdit((prev) => open ?? !prev);

  return (
    <div className="bb relative rounded-lg px-4 py-3">
      <div className="pb-1">
        {isEdit ? (
          <form
            className="flex items-stretch gap-2 text-sm"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={async (e) => {
              await update(e, "update", id);
              setEdit(false);
            }}
          >
            <input
              defaultValue={name}
              name="categoryName"
              type="text"
              className="bb w-full rounded-md p-1 text-sm"
            />
            <button type="submit" className="btn btn-darker py-1">
              Save
            </button>
          </form>
        ) : (
          <p className="text-lg">{name}</p>
        )}
      </div>
      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-center space-x-2 text-sm">
          <p className="c-secondary">Projects:</p>
          <span className="font-medium">{_count.projects}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 text-blue-500" onClick={() => toggleEdit()}>
            <PencilSquareIcon className="h-5 w-4" />
          </button>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <button className="p-1 text-red-500" onClick={() => remove(id)}>
            <TrashIcon className="h-5 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Categ);
