import DashboardWrapper from "@components/Dashboard/DashboardWrapper";
import { api } from "@utils/api";
import type { NextPage } from "next";

const ManageReviews: NextPage = () => {
  const { data } = api.feedbacks.getAll.useQuery({ includeUnPublished: true });
  return (
    <DashboardWrapper>
      <div>
        {data?.map((feed) => (
          <div key={feed.id}>
            <h2>{feed.feedback}</h2>
          </div>
        ))}
      </div>
    </DashboardWrapper>
  );
};

export default ManageReviews;
