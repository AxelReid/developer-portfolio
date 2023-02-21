import { useCallback, useState } from "react";
import type { FormEvent } from "react";
import type {
  CategoriesGetAll,
  CreateProjectInput,
  TagsGetAll,
} from "src/types/infer";
import Select from "./Select";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/outline";
import { api } from "@utils/api";

export interface CreateProjectProps {
  categories: {
    data?: CategoriesGetAll;
    isFetching: boolean;
  };
  tags: { data?: TagsGetAll; isFetching: boolean };
}

interface Props extends CreateProjectProps {
  close: () => void;
}
export interface SelectOption {
  id: string;
  name: string;
}
type WhichSelect = "tags" | "categs";

const Content: React.FC<Props> = ({ categories, tags, close }) => {
  const utils = api.useContext();
  const { mutateAsync, isLoading } = api.project.create.useMutation({
    onSuccess: async () => {
      await utils.project.invalidate();
      await utils.category.getAll.invalidate();
      await utils.tags.getAll.invalidate();
    },
  });

  const [selectedCategs, setCategs] = useState<SelectOption[]>([]);
  const [selectedTags, setTags] = useState<SelectOption[]>([]);

  const removeSelected = useCallback((id: string, type: WhichSelect) => {
    if (type === "tags") setTags((prev) => prev.filter((p) => p.id !== id));
    else if (type === "categs")
      setCategs((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const onSelect = (option: SelectOption, type: WhichSelect) => {
    if (!option.id || !option.name) return;
    if (type === "tags") setTags((prev) => [option, ...prev]);
    else if (type === "categs") setCategs((prev) => [option, ...prev]);
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const el = (name: string) => e.currentTarget[name] as HTMLInputElement;
    const title = el("title").value;
    const demo_link = el("demo_link").value;
    const source_link = el("source_link").value || undefined;

    const obj: CreateProjectInput = {
      title,
      demo_link,
      source_link,
      categoryIds: selectedCategs.map(({ id }) => id),
      tagIds: selectedTags.map(({ id }) => id),
    };
    try {
      await mutateAsync(obj);
      close();
    } catch (error) {}
  };

  return (
    <div>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="flex flex-col gap-4" onSubmit={submit}>
        <input
          placeholder="Project title"
          type="text"
          className="bb rounded-md"
          name="title"
        />
        <div className="flex gap-4">
          <input
            placeholder="Project demo link"
            type="text"
            className="bb w-full rounded-md"
            name="demo_link"
          />
          <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center">
            <LinkIcon className="h-5 w-5 flex-shrink-0" />
          </div>
        </div>
        <div className="flex gap-4">
          <input
            placeholder="Project source code (optional)"
            type="text"
            className="bb w-full rounded-md"
            name="source_link"
          />
          <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center">
            <CodeBracketIcon className="h-5 w-5 flex-shrink-0" />
          </div>
        </div>
        <Select
          title="Categories"
          data={categories.data}
          selected={selectedCategs}
          remove={(id) => removeSelected(id, "categs")}
          onSelect={(values) => onSelect(values, "categs")}
        />
        <Select
          title="Tags"
          data={tags.data}
          selected={selectedTags}
          remove={(id) => removeSelected(id, "tags")}
          onSelect={(values) => onSelect(values, "tags")}
        />

        <div className="flex justify-end gap-4 pt-6">
          <button
            disabled={isLoading}
            className="btn px-4"
            type="button"
            onClick={close}
          >
            Cancel
          </button>
          <button
            disabled={isLoading}
            className="btn btn-darker w-40 px-4"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Content;
