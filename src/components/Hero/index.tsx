import Github from "@components/icons/Github";
import StackOverflow from "@components/icons/StackOverflow";
import Telegram from "@components/icons/Telegram";
// import LinkedIn from '@components/icons/LinkedIn'
// import Twitter from '@components/icons/Twitter'
import { resume, telegram_link } from "src/static/social";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="container my-20 flex h-full max-h-[900px] items-center ">
      <section className="mt-24 flex flex-col pl-5 max-[500px]:pl-0 sm:mt-40 sm:flex-row lg:mt-44">
        <div className="pb-10 min-[500px]:pt-10 sm:block sm:pb-20">
          <div className="flex flex-row items-start gap-8 sm:w-24 sm:flex-col md:w-32 lg:w-40">
            <Telegram />
            <StackOverflow />
            <Github />
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
