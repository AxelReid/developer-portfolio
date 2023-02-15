import { useState } from "react";
import type { FormEvent } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import type { CategoriesGetAll, TagsGetAll } from "src/types/infer";

export interface CreateProjectProps {
  categories: {
    data?: CategoriesGetAll;
    isFetching: boolean;
  };
  tags: { data?: TagsGetAll; isFetching: boolean };
}

const CreateProject: React.FC<CreateProjectProps> = ({ categories, tags }) => {
  const [selectedCategs, setCategs] = useState<string[]>([]);
  const [selectedTags, setTags] = useState<string[]>([]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-fit">
      <h2 className="mb-4 font-medium">Create project</h2>
      <form className="flex flex-col gap-4" onSubmit={submit}>
        <input
          placeholder="Project title"
          type="text"
          className="bb rounded-md"
        />
        <div className="flex items-stretch gap-4">
          <select
            className="bb flex-grow"
            defaultValue=""
            onChange={(e) => setCategs((prev) => [...prev, e.target.value])}
          >
            <option value="" disabled>
              Choose categories
            </option>
            {categories?.data?.map((categ) =>
              !selectedCategs.includes(categ.id) ? (
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                <option key={categ.id} value={categ.name}>
                  {categ.name}
                </option>
              ) : null
            )}
          </select>
          <button className="btn w-[42px]" type="button">
            <PlusIcon />
          </button>
        </div>
        <div className="flex items-stretch gap-4">
          <select
            className="bb flex-grow"
            defaultValue=""
            onChange={(e) => setTags((prev) => [...prev, e.target.value])}
          >
            <option value="" disabled>
              Choose tags
            </option>
            {tags?.data?.map((tag) =>
              !selectedTags.includes(tag.id) ? (
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                <option key={tag.id} value={tag.name}>
                  ${tag.name}
                </option>
              ) : null
            )}
          </select>
          <button className="btn w-[42px]" type="button">
            <PlusIcon />
          </button>
        </div>
        <button className="btn btn-darker" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
