import { PlusIcon } from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import type { FormEvent } from "react";
import { useState } from "react";
import type { CategoriesGetAll } from "src/types/infer";
import Categ from "./Categ";

interface Props {
  categories?: CategoriesGetAll;
  refetch: () => void;
}

const Categories: React.FC<Props> = ({ categories, refetch }) => {
  const add = api.category.create.useMutation();
  const put = api.category.update.useMutation();
  const rm = api.category.remove.useMutation();

  const [isAdd, setAdd] = useState(false);

  const remove = async (id: string) => {
    try {
      await rm.mutateAsync({ id });
      refetch();
    } catch (error) {}
  };
  const updateCreate = async (
    e: FormEvent<HTMLFormElement>,
    action: "update" | "add",
    id?: string
  ) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const newValue = e.currentTarget?.categoryName?.value as string;
    if (!newValue) return;

    try {
      if (action === "add") {
        await add.mutateAsync({ name: newValue });
        refetch();
      } else if (action === "update" && id) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        await put.mutateAsync({ id, name: newValue });
        refetch();
      }
      (e.target as HTMLFormElement)?.reset();
    } catch (error) {}
  };

  return (
    <>
      <div className="mb-10 space-y-4">
        {isAdd ? (
          <div>
            <form
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={(e) => updateCreate(e, "add")}
              className="flex items-stretch gap-2 max-[415px]:flex-col"
            >
              <input
                name="categoryName"
                placeholder="Category name"
                type="text"
                className="bb w-full rounded-md min-[500px]:max-w-[200px]"
              />
              <div className="flex h-[42px] items-stretch gap-2">
                <button
                  type="submit"
                  disabled={add.isLoading}
                  className="btn btn-light text-sm font-medium"
                >
                  Create
                </button>
                <button
                  disabled={add.isLoading}
                  type="button"
                  className="btn btn-dark text-sm font-medium"
                  onClick={() => setAdd(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
            {add.error?.message && (
              <p className="mt-1 text-sm text-red-500">{add.error.message}</p>
            )}
          </div>
        ) : (
          <button
            onClick={() => setAdd(true)}
            className="btn flex items-center gap-3 px-3"
          >
            <PlusIcon className="w-5" />
            Add a category
          </button>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories?.map((c) => (
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          <Categ key={c.id} {...c} remove={remove} update={updateCreate} />
        ))}
      </div>
    </>
  );
};

export default Categories;
