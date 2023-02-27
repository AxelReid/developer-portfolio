import DashboardWrapper from "@components/Dashboard/DashboardWrapper";
import Item from "@components/Dashboard/Feedbacks/Item";
import { api } from "@utils/api";
import type { NextPage } from "next";

const ManageReviews: NextPage = () => {
  const { data, isLoading } = api.feedbacks.getAll.useQuery(
    { includeUnPublished: true },
    { refetchOnMount: true }
  );

  return (
    <DashboardWrapper>
      <div
        className={`flex w-full items-center justify-center overflow-hidden transition-[height] duration-200 ${
          isLoading ? "h-14" : "h-0"
        }`}
      >
        <span className="text-center font-medium">Loading...</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((feed) => (
          <Item key={feed.id} {...feed} />
        ))}
      </div>
    </DashboardWrapper>
  );
};

export default ManageReviews;
