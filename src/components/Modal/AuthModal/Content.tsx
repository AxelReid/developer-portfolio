import { GithubSvg, GoogleSvg } from "@components/icons";
import Button from "@components/ui/Button";
import type { BuiltInProviderType } from "next-auth/providers";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const providers = [
  {
    name: "Google",
    provider: "google",
    icon: <GoogleSvg className="h-6 w-6" key="google" />,
    btnVariant: "light",
    txtCn: "",
  },
  {
    name: "Github",
    provider: "github",
    icon: <GithubSvg className="h-6 w-6 rounded-full invert " key="github" />,
    btnVariant: "dark",
    txtCn: "text-white",
  },
  // {
  //   name: "Twitter",
  //   provider: "twitter",
  //   icon: <RedditSvg className="h-6 w-6 !fill-white" />,
  //   btnCN: "btn-dark !bg-[#00acee]",
  //   txtCN: "!text-white",
  // },
  // {
  //   name: "Discord",
  //   provider: "discord",
  //   icon: <DiscordSvg className="h-6 w-6 !fill-white" />,
  //   btnCN: "btn-dark !bg-[#7289da]",
  //   txtCN: "!text-white",
  // },
] as const;

interface Props {
  clearQuery: () => void;
}

const Content: React.FC<Props> = ({ clearQuery }) => {
  const { query, pathname } = useRouter();
  const { status } = useSession();

  const login = (provider: BuiltInProviderType) => () => {
    signIn(provider, {
      redirect: false,
      callbackUrl: pathname.includes("dashboard")
        ? undefined
        : (query?.authTo as string) || "/dashboard",
    })
      .then(() => {
        clearQuery();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="text-xl font-medium">Login</h1>
      {query?.authTo && (
        <p className="mt-2 text-red-500">
          {status === "authenticated"
            ? "Login with an admin account!"
            : "Login to enter!"}
        </p>
      )}
      <div className="mt-10 flex flex-col gap-4">
        {providers.map((p) => (
          <Button
            onClick={login(p.provider)}
            variant={p.btnVariant}
            key={p.provider}
            icon={p.icon}
            className="justify-start gap-3 font-semibold"
          >
            <span className={`${p.txtCn}`}>Signin with {p.name}</span>
          </Button>
        ))}
      </div>
    </>
  );
};

export default Content;
