import { resume } from "src/static/social";
import { BriefcaseIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { handleHoverEffect } from "@utils/hoverCardEffect";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Button from "@components/ui/Button";
const ComputersCanvas = dynamic(() => import("@components/canvas/Computers"), {
  ssr: false,
});

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
    name: "Job role",
    value: "Full stack web, also wants to experience AI and mobile development",
  },
  {
    icon: <BriefcaseIcon strokeWidth={1.25} />,
    name: "Occupation",
    value: "Full-time, prefers part-time for some time",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <path d="m9 10 2 2 4-4" />
      </svg>
    ),
    name: "Location",
    value: "Prefers remote, open to off-site",
  },
];

const About = () => {
  const [showIt, setShowIt] = useState(false);
  const isMatch = useMediaQuery({ maxWidth: 1280 });
  useEffect(() => {
    setShowIt(isMatch);
  }, [isMatch]);
  return (
    <section className="section container max-w-[1208px] !pt-0 xl:mt-36">
      <div>
        {/* <Title title="About Me" desc="My introduction" /> */}
        {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20"> */}
        {/* <div className="bb flex items-center justify-center rounded-2xl p-10">
            <Image className="object-contain" src={Anim} alt="" />
          </div> */}
        <div>
          {showIt && (
            <div className="aspect-[9/4.7] w-full md:-mt-10">
              <ComputersCanvas />
            </div>
          )}
          <div
            id="hover-cards"
            onMouseMove={handleHoverEffect}
            className="mt-2 flex flex-wrap gap-4"
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
          <div className="c-secondary my-10 text-justify text-xl leading-loose tracking-wide">
            I’ve been building full-stack web applications using a variety of
            modern technologies.
            <br />
            I’ve worked independently, with teams, and for companies across
            different countries.
            <br />
            <br />
            My journey started in{" "}
            <b className="bg-gradient-to-tr from-pink-500 to-blue-500 bg-clip-text text-transparent">
              UI/UX design
            </b>
            — turning design templates into pixel-perfect, responsive web apps.
            <br />
            Over time, I transitioned into building and maintaining
            enterprise-grade applications with clean architecture on both the
            frontend and backend.
            <br />
            <br />I also develop cross-platform mobile apps with{" "}
            <b className="text-cyan-500">React Native</b> and desktop apps with{" "}
            <b>Electron.</b>
            <br />
            However, I’ve been moving towards native development with{" "}
            <b>Kotlin, Swift,</b> and{" "}
            <b className="text-gql">Kotlin Multiplatform (KMP)</b> to build more
            performant and efficient apps.
            <br />
            <br />
            I’m also deeply interested in <b>AI</b> development, especially{" "}
            <b>Natural Language Processing (NLP).</b>
            <br />
            I’ve worked with pre-trained{" "}
            <b>Automated Speech Recognition (ASR)</b> models in Python.
            <br />
            <br />
            Right now, my core expertise is in full-stack web development.
            <br />
            Mobile and AI development are my secondary focuses — areas I’m
            actively learning and mastering.
          </div>
          <div className="flex justify-start">
            <a href={resume} target="_blank" rel="noreferrer" className="w-fit">
              <Button variant="secondary" className="rounded-2xl px-8 py-6">
                <span className="whitespace-nowrap font-medium">
                  View Resume
                </span>
                <DocumentTextIcon className="ml-1 w-6 -translate-y-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
