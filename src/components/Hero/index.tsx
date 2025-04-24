import Github from "@components/icons/Github";
import StackOverflow from "@components/icons/StackOverflow";
import Telegram from "@components/icons/Telegram";
import LinkedIn from "@components/icons/LinkedIn";
// import Twitter from '@components/icons/Twitter'
import { resume, telegram_link } from "src/static/social";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ComputersCanvas = dynamic(() => import("@components/canvas/Computers"));

const Hero = () => {
  const [showIt, setShowIt] = useState(false);
  const isMatch = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {
    setShowIt(isMatch);
  }, [isMatch]);

  return (
    <main className="container relative flex h-full max-h-[900px] items-stretch sm:mt-20">
      <section className="z-[1] mt-24 flex flex-col pl-4 max-[500px]:pl-0 sm:flex-row">
        <div className="pb-10 sm:block sm:pt-2">
          <div className="flex flex-row items-start gap-8 sm:w-24 sm:flex-col lg:w-32 ">
            <Telegram />
            <LinkedIn />
            <StackOverflow />
            <Github />
          </div>
        </div>
        <div>
          <h1 className="text-6xl font-extrabold lg:text-7xl">
            Full-Stack Engineer
          </h1>
          <div className="mt-5 flex items-center space-x-6">
            <div className="w-16 border-t border-zinc-400 dark:border-gray-500 sm:w-24" />
            <p
              className="bg-gradient-to-r from-zinc-700 to-zinc-400 bg-clip-text text-xl 
              font-light text-transparent 
              dark:from-zinc-400 dark:to-zinc-600 
              sm:text-2xl"
            >
              Asilbek Anvarbekov
            </p>
          </div>
          <p className="c-secondary mt-4 max-w-lg text-lg sm:text-xl">
            Building web since 2020, with expertise in cross-platform and native
            app development.
          </p>
          <div className="mt-10 flex gap-3 text-sm min-[500px]:gap-5 sm:mt-11 sm:text-base">
            <Link
              href={telegram_link}
              target="_blank"
              className="max-sm:flex-1"
            >
              <button className="btn btn-darker flex w-full items-center justify-center space-x-3 rounded-2xl py-6 font-medium max-[500px]:rounded-xl max-[500px]:py-5 min-[500px]:px-8">
                <span className="whitespace-nowrap">Got A Project?</span>
                <ChatBubbleOvalLeftEllipsisIcon className="w-6 -translate-y-0.5" />
              </button>
            </Link>
            <Link href={resume} target="_blank" className="max-sm:flex-1">
              <button className="btn flex w-full items-center justify-center space-x-3 rounded-2xl py-6 font-medium max-[500px]:rounded-xl max-[500px]:py-5 min-[500px]:px-8">
                <span className="whitespace-nowrap">View Resume</span>
                <DocumentTextIcon className="w-6 -translate-y-px" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      {showIt && (
        <div
          className="absolute top-0 bottom-0 right-0 translate-y-20 md:aspect-[9/5]
        lg:aspect-[9/4.5]"
        >
          <ComputersCanvas />
        </div>
      )}
    </main>
  );
};

export default Hero;
