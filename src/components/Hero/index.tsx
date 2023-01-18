import Github from "@components/icons/Github";
import StackOverflow from "@components/icons/StackOverflow";
import Telegram from "@components/icons/Telegram";
// import LinkedIn from '@components/icons/LinkedIn'
// import Twitter from '@components/icons/Twitter'
import { resume } from "@data/social";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="container flex max-h-[850px] items-center pt-20 md:h-[calc(100vh-100px)]">
      <section className="flex flex-col pl-5 pt-20 max-[500px]:pl-0 md:flex-row lg:pt-28">
        <div className="pb-20 pt-5 min-[500px]:pt-10 md:pt-20">
          <div className="flex w-40 flex-col items-start space-y-8">
            <Telegram />
            <StackOverflow />
            <Github />
            {/* <LinkedIn />
            <Twitter /> */}
          </div>
        </div>
        <div>
          <h1 className="text-6xl font-extrabold sm:text-7xl">Asilbek Dev</h1>
          <div className="mt-5 flex items-center space-x-6">
            <div className="w-16 border-t border-zinc-400 dark:border-gray-500 sm:w-24" />
            <p
              className="bg-gradient-to-r from-zinc-700 to-zinc-400 bg-clip-text text-xl 
              font-light text-transparent 
              dark:from-zinc-400 dark:to-zinc-600 
              sm:text-2xl"
            >
              Fullstack Web Developer
            </p>
          </div>
          <p className="c-secondary mt-4 max-w-md text-lg sm:text-xl">
            I&rsquo;m an experienced Fullstack FE-heavy web developer with 2+
            years working with Next.js
          </p>
          <div className="mt-10 flex gap-3 text-sm min-[500px]:gap-5 sm:mt-11 sm:text-base">
            <Link href="/#get-in-touch">
              <button
                className="btn btn-dark flex items-center space-x-3
              rounded-2xl py-6
              px-8 font-medium max-[500px]:rounded-xl max-[500px]:p-5"
              >
                <span className="whitespace-nowrap">Got A Project?</span>
                <ChatBubbleOvalLeftEllipsisIcon className="w-6 -translate-y-1" />
              </button>
            </Link>
            <a href={resume} target="_blank" rel="noreferrer">
              <button
                className="btn flex items-center space-x-3
                rounded-2xl py-6
              px-8 font-medium max-[500px]:rounded-xl max-[500px]:p-5"
              >
                <span className="whitespace-nowrap">View Resume</span>
                <DocumentTextIcon className="w-6 -translate-y-1" />
              </button>
            </a>
          </div>
          <div className="mt-20 flex md:mt-48">
            <p className="c-secondary text-base sm:text-lg">
              Site is under development but feel free to look around!
            </p>
            {/* <ArrowLongDownIcon className='w-5' /> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
