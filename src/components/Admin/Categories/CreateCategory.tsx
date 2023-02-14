import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import type { FormEvent } from "react";
import type { CategoriesGetAll } from "src/types/infer";

interface Props {
  categories?: CategoriesGetAll;
}

const CreateCategory: React.FC<Props> = ({ categories }) => {
  const { mutateAsync, error, isLoading } = api.category.create.useMutation();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (e.currentTarget.name as unknown as { value: string }).value;
    try {
      await mutateAsync({ name: value });
      e.currentTarget?.reset();
    } catch (error) {}
  };

  return (
    <div className="w-fit">
      <h2 className="mb-4 font-medium">Create category</h2>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="flex flex-col gap-4" onSubmit={submit}>
        <input
          name="name"
          placeholder="Project title"
          type="text"
          className="bb rounded-md"
        />
        <button disabled={isLoading} className="btn btn-darker" type="submit">
          {isLoading ? "Loading..." : "Create"}
        </button>
        {error && (
          <p className="text-center text-sm text-red-500">{error.message}</p>
        )}
      </form>
      <div className="mt-4 space-y-4">
        {categories?.map((c) => (
          <div key={c.id} className="bb rounded-md py-2 px-3">
            <div className="flex items-center justify-between">
              <p className="font-medium">{c.name}</p>
              <div>12</div>
            </div>
            <div className="mt-2 flex gap-3">
              <button className="focus:!ring-0">
                <TrashIcon className="h-5 w-5 text-red-500" />
              </button>
              <button className="focus:!ring-0">
                <PencilSquareIcon className="h-5 w-5 text-cyan-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateCategory;
