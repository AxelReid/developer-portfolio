import { type NextPage } from "next";
import dynamic from "next/dynamic";

import Meta from "src/components/Meta";
import Header from "src/components/Header";
import Hero from "src/components/Hero";

const StarsCanvas = dynamic(() => import("@components/canvas/Stars"), {
  ssr: false,
});
const About = dynamic(() => import("src/components/About"));
const Skills = dynamic(() => import("src/components/Skills"));
const Experience = dynamic(() => import("src/components/Experience"));
const Projects = dynamic(() => import("src/components/Projects"));
const Certificates = dynamic(() => import("src/components/Certificates"));
const Testimonial = dynamic(() => import("src/components/Testimonial"));

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <StarsCanvas />
      <Header />
      <Hero />
      <About />
      <Gap />
      <Skills />
      <Gap />
      <Projects />
      <Gap />
      <Experience />
      <Gap />
      <Certificates />
      <Gap />
      <Testimonial />
    </>
  );
};

const Gap = () => <div className="h-32"></div>;

export default Home;
