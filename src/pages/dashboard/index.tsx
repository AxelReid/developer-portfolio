import DashboardWrapper from "@components/Dashboard/DashboardWrapper";
import { GithubSvg, GoogleSvg } from "@components/icons";
import { api } from "@utils/api";
import { useSession } from "next-auth/react";

const signedWith: { [key: string]: JSX.Element } = {
  google: <GoogleSvg key="google" className="h-5 w-5 sm:h-6 sm:w-6" />,
  github: (
    <GithubSvg key="github" className="h-5 w-5 dark:fill-white sm:h-6 sm:w-6" />
  ),
};

const DashboardPage = () => {
  const { data: session } = useSession();
  const { data: me } = api.users.me.useQuery();

  return (
    <DashboardWrapper>
      <div className="br border-0 border-b pb-6">
        <h3 className="text-2xl font-semibold sm:text-3xl">
          {session?.user?.name}
        </h3>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="c-secondary max-sm:text-sm">{session?.user?.email}</p>
          {me?.providers && me.providers.length > 0 && (
            <div className="flex space-x-3">
              <p className="c-secondary mr-1 whitespace-nowrap max-sm:text-sm">
                Signed with:
              </p>
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-return */}
              {me?.providers.map((p) => signedWith[p] || null)}
            </div>
          )}
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default DashboardPage;
