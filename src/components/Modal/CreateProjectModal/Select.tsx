import { XMarkIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { memo } from "react";
import type { CategoriesGetAll, TagsGetAll } from "src/types/infer";
import type { SelectOption } from "./Content";

interface Props {
  title: string;
  data?: CategoriesGetAll | TagsGetAll;
  selected: SelectOption[];
  onSelect: (option: SelectOption) => void;
  remove: (optioId: string) => void;
}

const Select: React.FC<Props> = ({
  data,
  selected,
  title,
  onSelect,
  remove,
}) => {
  return (
    <>
      <div className="flex gap-4">
        <select
          className="bb flex-grow"
          defaultValue=""
          onChange={(e) => {
            const theOption = e.target.selectedOptions.item(0);
            onSelect({
              id: theOption?.value as string,
              name: theOption?.dataset.name as string,
            });
          }}
        >
          <option value="">Choose {title}</option>
          {data?.map((tag) =>
            selected.findIndex((st) => st.id === tag.id) === -1 ? (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              <option key={tag.id} data-name={tag.name} value={tag.id}>
                {tag.name}
              </option>
            ) : null
          )}
        </select>
        <Link href="/dashboard/manage-projects" target="_blank">
          <button
            type="button"
            className="btn flex h-[42px] w-[42px] items-center justify-center"
          >
            <PlusIcon className="h-5 w-5 flex-shrink-0" />
          </button>
        </Link>
      </div>
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selected.map((tag, i) => (
            <button
              type="button"
              className="btn btn-darker flex items-center gap-1 rounded py-1 px-2"
              key={i}
            >
              <span className="text-sm">{tag.name}</span>
              <XMarkIcon className="h-4 w-4" onClick={() => remove(tag.id)} />
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default memo(Select);
