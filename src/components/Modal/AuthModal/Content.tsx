import { DiscordSvg, GithubSvg, googleSvg, RedditSvg } from "@components/icons";
import type { BuiltInProviderType } from "next-auth/providers";
import { signIn } from "next-auth/react";

const providers = [
  {
    name: "Google",
    provider: "google",
    icon: (
      <div className="h-6 w-6" key="icon">
        {googleSvg}
      </div>
    ),
    btnCN: "btn-light",
    txtCN: "",
  },
  {
    name: "Github",
    provider: "github",
    icon: <GithubSvg className="h-6 w-6 rounded-full invert " key="icon" />,
    btnCN: "btn-dark",
    txtCN: "!text-white",
  },
  {
    name: "Twitter",
    provider: "twitter",
    icon: <RedditSvg className="h-6 w-6 !fill-white" />,
    btnCN: "btn-dark !bg-[#00acee]",
    txtCN: "!text-white",
  },
  {
    name: "Discord",
    provider: "discord",
    icon: <DiscordSvg className="h-6 w-6 !fill-white" />,
    btnCN: "btn-dark !bg-[#7289da]",
    txtCN: "!text-white",
  },
] as const;

const Content = () => {
  const login = (provider: BuiltInProviderType) => async () => {
    // try {
    //   const res = await signIn(provider, { redirect: false });
    //   console.log(res);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <>
      <h1 className="text-xl font-medium">Login</h1>
      <div className="mt-10 flex flex-col gap-4">
        {providers.map((p) => (
          <button
            key={p.provider}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={login(p.provider)}
            className={`btn px-4 py-2.5 text-left font-semibold ${p.btnCN}`}
          >
            <div className="flex items-center gap-3">
              {p.icon}
              <span className={`${p.txtCN}`}>Continue with {p.name}</span>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default Content;
