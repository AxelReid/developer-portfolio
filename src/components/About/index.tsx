import Title from "@components/Title";
import { resume } from "src/static/social";
import { BriefcaseIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { handleHoverEffect } from "@utils/hoverCardEffect";

const cards = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.25"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="12" cy="9" r="6"></circle>
        <path d="M12.002 15.003l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"></path>
        <path d="M6.802 12.003l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"></path>
      </svg>
    ),
    name: "Experience",
    value: "2 + Years",
  },
  {
    icon: <BriefcaseIcon strokeWidth={1.25} />,
    name: "Completed",
    value: "40 + Projects",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.25"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="4" y="13" rx="2" width="4" height="6"></rect>
        <rect x="16" y="13" rx="2" width="4" height="6"></rect>
        <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
        <path d="M18 19a6 3 0 0 1 -6 3"></path>
      </svg>
    ),
    name: "Available",
    value: "30 hours a week",
  },
];

const About = () => {
  return (
    <section id="about-me" className="sTo section container max-w-5xl">
      <div>
        <Title title="About Me" desc="My introduction" />
        {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20"> */}
        {/* <div className="bb flex items-center justify-center rounded-2xl p-10">
            <Image className="object-contain" src={Anim} alt="" />
          </div> */}
        <div>
          <div
            id="hover-cards"
            onMouseMove={handleHoverEffect}
            className="flex flex-wrap gap-4"
          >
            {cards.map((card, i) => (
              <div
                id="hover-card"
                key={i}
                className="flex min-w-[150px] flex-1 flex-col items-center justify-center rounded-lg p-5"
              >
                <span id="hover-card-overlay" />
                <div className="mb-1 h-7 w-7">{card.icon}</div>
                <p className="my-2 text-center text-lg">{card.name}</p>
                <p className="c-secondary text-center text-sm">{card.value}</p>
              </div>
            ))}
          </div>
          <div className="c-secondary my-10 text-xl leading-loose tracking-wide">
            Initially, my journey started{" "}
            <b className="text-zinc-700 dark:text-zinc-200">in 2019</b> with
            learning <b className="text-orange-500">html</b>{" "}
            <b className="text-css">css</b>{" "}
            <b className="text-yellow-500">javascript</b> on my own and worked a
            lot on{" "}
            <b className="bg-gradient-to-tr from-pink-500 to-blue-500 bg-clip-text text-transparent">
              UI/UX design
            </b>{" "}
            with <b className="text-gql">scss</b>.
            <div className="h-7" />
            <b className="text-zinc-700 dark:text-zinc-200">In 2020</b>, my
            serious web development career began with{" "}
            <b className="text-cyan-500">Reactjs</b>,{" "}
            <b className="text-zinc-700 dark:text-zinc-200">Nextjs</b> and{" "}
            <b className="text-zinc-700 dark:text-zinc-200">
              <span className="text-mongodb">M</span>
              <span className="text-500">E</span>
              <span className="text-cyan-500">R</span>
              <span className="text-nodejs">N</span> Stack
            </b>
            .
            <div className="h-7" />
            I&rsquo;m a big{" "}
            <b className="text-yellow-500">javascript enthusiast</b> and built
            my skills around it. I always try to be up-to-date with what&rsquo;s
            happening in its <b className="text-yellow-500">ecosystem</b>. I
            explore & try new features, technologies that looks interesting and
            helpful. If i find a technology that feels futuristic and introduces
            better solutions for common problems, most importantly gives the
            best <b className="text-zinc-600 dark:text-zinc-300">DX</b> and
            great performance, I just learn and add it to skillset.
            <br />
            So far in my main gear, I have <b className="text-ts">Typescript</b>
            , <b className="text-zinc-700 dark:text-zinc-200">Nextjs</b>,{" "}
            <b className="text-nestjs">Nestjs</b>,{" "}
            <b className="text-gql">Graphql</b> by those factors. I&rsquo;m
            always exploring and mastering my skills to{" "}
            <span
              className="text-zinc-700 
            [text-shadow:0_0_5px_rgba(0,0,0,0.5)] 
            dark:text-zinc-100 
            dark:[text-shadow:0_0_5px_white]"
            >
              enjoy developing
            </span>{" "}
            better than yesterday.
          </div>
          <a href={resume} target="_blank" rel="noreferrer">
            <button className="btn btn-dark flex items-center space-x-3 rounded-2xl py-6 px-8 font-medium">
              <span className="whitespace-nowrap">View Resume</span>
              <DocumentTextIcon className="w-6 -translate-y-1" />
            </button>
          </a>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;
