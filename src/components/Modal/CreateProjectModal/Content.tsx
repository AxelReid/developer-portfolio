import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import type { FormEvent, ChangeEvent } from "react";
import { useCallback, useState } from "react";
import type {
  CategoriesGetAll,
  CreateProjectInput,
  ProjectType,
  TagsGetAll,
} from "src/types/infer";
import Select from "./Select";
export interface SelectOption {
  id: string;
  name: string;
}
type WhichSelect = "tags" | "categs";
export interface CreateProjectProps {
  categories: {
    data?: CategoriesGetAll;
    isFetching: boolean;
  };
  tags: { data?: TagsGetAll; isFetching: boolean };
}
interface Props extends CreateProjectProps {
  close: () => void;
  edit?: ProjectType;
}

const Content: React.FC<Props> = ({ categories, tags, edit, close }) => {
  const utils = api.useContext();
  const add = api.project.create.useMutation({
    onSuccess: async () => {
      await utils.project.invalidate();
      await utils.category.getAll.invalidate();
      await utils.tags.getAll.invalidate();
    },
  });
  const update = api.project.update.useMutation({
    onSuccess: async () => {
      await utils.project.invalidate();
      await utils.category.getAll.invalidate();
      await utils.tags.getAll.invalidate();
    },
  });

  const [selectedCategs, setCategs] = useState<SelectOption[]>(
    edit?.categories || []
  );
  const [selectedTags, setTags] = useState<SelectOption[]>(edit?.tags || []);
  const [form, setForm] = useState<
    Pick<CreateProjectInput, "title" | "demo_link" | "source_link">
  >({
    title: edit?.title || "",
    demo_link: (edit?.demo_link as string) || undefined,
    source_link: (edit?.source_link as string) || undefined,
  });

  const handleForm = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value })),
    []
  );

  const removeSelected = useCallback((id: string, type: WhichSelect) => {
    if (type === "tags") setTags((prev) => prev.filter((p) => p.id !== id));
    else if (type === "categs")
      setCategs((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const onSelect = useCallback((option: SelectOption, type: WhichSelect) => {
    if (!option.id || !option.name) return;
    if (type === "tags") setTags((prev) => [option, ...prev]);
    else if (type === "categs") setCategs((prev) => [option, ...prev]);
  }, []);

  const submit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const obj: CreateProjectInput = {
        ...form,
        categoryIds: selectedCategs.map(({ id }) => id),
        tagIds: selectedTags.map(({ id }) => id),
      };
      try {
        if (edit?.id) await update.mutateAsync({ ...obj, id: edit.id });
        else await add.mutateAsync(obj);
        close();
      } catch (error) {}
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form, selectedCategs, selectedTags]
  );

  return (
    <div>
      <h3 className="mb-6 text-lg font-medium">
        {edit?.id ? "Update" : "Create"} project
      </h3>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="flex flex-col gap-4" onSubmit={submit}>
        <input
          placeholder="Project title"
          type="text"
          className="bb rounded-md"
          name="title"
          value={form.title}
          onChange={handleForm}
        />
        <div className="flex gap-4">
          <input
            placeholder="Project demo link"
            type="text"
            className="bb w-full rounded-md"
            name="demo_link"
            value={form.demo_link || ""}
            onChange={handleForm}
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
            value={form.source_link || ""}
            onChange={handleForm}
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
            disabled={add.isLoading || update.isLoading}
            className="btn px-4"
            type="button"
            onClick={close}
          >
            Cancel
          </button>
          <button
            disabled={add.isLoading || update.isLoading}
            className="btn btn-darker w-40 px-4"
            type="submit"
          >
            {edit?.id ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Content;
