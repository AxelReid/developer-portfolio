import { PlusIcon } from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import type { FormEvent } from "react";
import { useState } from "react";

const CreateProject = () => {
  const {
    data: categories,
    isFetching: categsFetching,
    refetch,
  } = api.category.getAll.useQuery(undefined, { enabled: false });
  const {
    data: tags,
    isFetching: tagsFetching,
    refetch: fetchtags,
  } = api.tags.getAll.useQuery(undefined, { enabled: false });

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
            onFocus={() => (!categories?.length ? refetch() : {})}
            onChange={(e) => setCategs((prev) => [...prev, e.target.value])}
          >
            <option value="" disabled>
              {categsFetching ? "Loading..." : "Choose categories"}
            </option>
            {categories?.length
              ? categories.map((categ) =>
                  !selectedCategs.includes(categ.id) ? (
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    <option key={categ.id} value={categ.name}>
                      ${categ.name}
                    </option>
                  ) : null
                )
              : null}
          </select>
          <button className="btn w-[42px]" type="button">
            <PlusIcon />
          </button>
        </div>
        <div className="flex items-stretch gap-4">
          <select
            className="bb flex-grow"
            defaultValue=""
            onFocus={() => (!tags?.length ? fetchtags() : {})}
            onChange={(e) => setTags((prev) => [...prev, e.target.value])}
          >
            <option value="" disabled>
              {tagsFetching ? "Loading..." : "Choose tags"}
            </option>
            {tags?.length
              ? tags.map((tag) =>
                  !selectedTags.includes(tag.id) ? (
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    <option key={tag.id} value={tag.name}>
                      ${tag.name}
                    </option>
                  ) : null
                )
              : null}
          </select>
          <button className="btn w-[42px]" type="button">
            <PlusIcon />
          </button>
        </div>
        <button className="btn btn-darker" type="submit">
          Create & Save
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
