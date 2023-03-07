import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import type { FormEvent } from "react";
import { memo } from "react";
import { useState } from "react";
import type { TagsGetAll } from "src/types/infer";
import Tag from "./Tag";

interface Props {
  tags?: TagsGetAll;
  refetch: () => void;
}
type Edit = {
  id: string;
  name: string;
};

const Tags: React.FC<Props> = ({ tags, refetch }) => {
  const rm = api.tags.remove.useMutation();
  const put = api.tags.update.useMutation();
  const add = api.tags.create.useMutation();

  const [selected, setSelected] = useState<string[]>([]);
  const [edit, setEdit] = useState<Edit | null>(null);
  const [isAdd, setAdd] = useState(false);

  // REMOVE functionalities
  const selectAll = () => {
    const ts: string[] = [];
    for (const { id } of tags || []) {
      if (id !== edit?.id) ts.push(id);
    }
    setSelected(ts);
  };
  const disSelectAll = () => setSelected([]);
  const handleSelect = (id: string) => {
    if (edit?.id === id) setEdit(null);
    const exist = selected.includes(id);
    setSelected((prev) =>
      !exist ? [...prev, id] : prev.filter((s) => s !== id)
    );
  };
  const submitRemove = async () => {
    try {
      await rm.mutateAsync({ ids: selected });
      disSelectAll();
      refetch();
    } catch (error) {}
  };

  // EDIT/ADD functionalities
  const handleEdit = (tag: Edit) => {
    setAdd(false);
    setEdit((prev) => (prev?.id !== tag.id ? tag : null));
  };
  const handleAdd = (isAdd?: boolean) => {
    setEdit(null);
    setAdd((prev) => isAdd ?? !prev);
  };
  const submitEditOrAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const newValue = e.currentTarget?.newName?.value as string;
    if (!newValue) return;

    try {
      if (isAdd) {
        await add.mutateAsync({ name: newValue });
        refetch();
      } else if (edit && edit.name !== newValue) {
        await put.mutateAsync({ id: edit.id, name: newValue });
        setEdit(null);
        refetch();
      }
      (e.target as HTMLFormElement)?.reset();
    } catch (error) {}
  };

  return (
    <div>
      <div className="space-y-4">
        {edit || isAdd ? (
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          <form onSubmit={submitEditOrAdd}>
            {edit && (
              <div className="mb-1 flex gap-2 text-sm">
                <span className="c-secondary">Previous value:</span>
                <span>{edit.name}</span>
              </div>
            )}
            <div className="flex items-stretch gap-2 max-[415px]:flex-col">
              <input
                name="newName"
                defaultValue={edit?.name}
                placeholder={isAdd ? "Tag name" : "Update tag"}
                type="text"
                className="bb w-full rounded-md min-[500px]:max-w-[200px]"
              />
              <div className="flex h-[42px] items-stretch gap-2">
                <button
                  disabled={add.isLoading || put.isLoading}
                  className="btn btn-light text-sm font-medium"
                >
                  {isAdd ? "Create" : "Update"}
                </button>
                <button
                  disabled={add.isLoading || put.isLoading}
                  type="button"
                  onClick={() => {
                    setEdit(null);
                    handleAdd(false);
                  }}
                  className="btn btn-dark text-sm font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
            {((isAdd && add.error?.message) ||
              (edit && put.error?.message)) && (
              <p className="mt-1 text-sm text-red-500">
                {add.error?.message || put.error?.message}
              </p>
            )}
          </form>
        ) : (
          <button
            onClick={() => handleAdd()}
            className="btn flex items-center gap-3 px-3"
          >
            <PlusIcon className="w-5" />
            Add a tag
          </button>
        )}
        {!!selected.length && (
          <div className="flex gap-4">
            <button
              onClick={selectAll}
              className="flex h-[42px] items-center justify-center gap-2 bg-blue-500/10 p-2 px-3 text-blue-500 dark:bg-blue-500/20"
            >
              All
              <PlusIcon className="w-4" />
            </button>
            <button
              onClick={disSelectAll}
              className="flex h-[42px] items-center justify-center gap-2 bg-orange-500/10 px-3 text-orange-500"
            >
              All
              <MinusIcon className="w-4" />
            </button>
            <button
              disabled={rm.isLoading}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={submitRemove}
              className="flex h-[42px] items-center justify-center gap-2 bg-red-500/10 px-3 text-red-500 dark:bg-red-500/20"
            >
              <TrashIcon className="w-4" />
              {selected.length}
            </button>
          </div>
        )}
      </div>
      <div className="mt-10 flex flex-wrap gap-2 pb-10 ">
        {tags?.map((tag) => {
          const isEdit = edit?.id === tag.id;
          const isRm = selected.includes(tag.id);
          return (
            <Tag
              key={tag.id}
              {...tag}
              isRm={isRm}
              isEdit={isEdit}
              dbClickBtn={() => handleSelect(tag.id)}
              clickEdit={() => (isRm ? handleSelect(tag.id) : handleEdit(tag))}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(Tags);
