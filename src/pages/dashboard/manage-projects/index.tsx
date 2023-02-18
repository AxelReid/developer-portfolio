import type { NextPage } from "next";
import DashboardWrapper from "@components/Dashboard/DashboardWrapper";
import { PlusIcon } from "@heroicons/react/24/outline";
import Tags from "@components/Dashboard/Tags";
import { api } from "@utils/api";
import Categories from "@components/Dashboard/Categories";

const ManageProjects: NextPage = () => {
  const categories = api.category.getAll.useQuery();
  const tags = api.tags.getAll.useQuery();

  return (
    <>
      <DashboardWrapper>
        <section className="space-y-7">
          <div className="br border-0 border-b pb-10">
            <h1 className="mb-4 text-xl">Manage projects</h1>
            <button className="btn mb-4 flex items-center gap-3 px-3">
              <PlusIcon className="w-5" />
              Add a project
            </button>
            <div className="mt-10 rounded-lg">
              <table className="w-full table-auto">
                <thead className="b">
                  <tr className="text-left">
                    <th className="py-4 font-semibold">Image</th>
                    <th className="py-4 font-semibold">Title</th>
                    <th className="py-4 font-semibold">Links</th>
                    <th className="py-4 font-semibold">Category</th>
                    <th className="py-4 font-semibold">Tags</th>
                    <th className="py-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <tr key={i}>
                        <td>
                          <div className="aspect-square w-24 rounded-lg bg-black/5"></div>
                        </td>
                        <td>
                          <h2 className="text-lg font-medium">Project title</h2>
                        </td>
                        <td>
                          <p>Github repo</p>
                          <p>Demo</p>
                        </td>
                        <td>
                          <select name="" id="" className="bb ">
                            <option value="Full stack">Full stack</option>
                          </select>
                        </td>
                        <td>tags</td>
                        <td>actions</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="br border-0 border-b pb-10">
            <h1 className="mb-4 text-xl">
              Manage categories
              <span className="ml-2 text-sm">
                ({categories.data?.length ?? 0})
              </span>
            </h1>
            <Categories
              categories={categories.data}
              refetch={categories.refetch as () => void}
            />
          </div>
          <div>
            <h1 className="mb-4 text-xl">
              Manage tags
              <span className="ml-2 text-sm">({tags.data?.length ?? 0})</span>
            </h1>
            <Tags tags={tags.data} refetch={tags.refetch as () => void} />
          </div>
        </section>
      </DashboardWrapper>
    </>
  );
};

export default ManageProjects;
