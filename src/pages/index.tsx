import { type NextPage } from "next";
import dynamic from "next/dynamic";

import Meta from "src/components/Meta";
import Header from "src/components/Header";
import Hero from "src/components/Hero";
const About = dynamic(() => import("src/components/About"));
const Skills = dynamic(() => import("src/components/Skills"));
const Services = dynamic(() => import("src/components/Services"));
const Qualification = dynamic(() => import("src/components/Qualification"));
const Portfolio = dynamic(() => import("src/components/Portfolio"));
const Testimonial = dynamic(() => import("src/components/Testimonial"));
const ContactMe = dynamic(() => import("src/components/ContactMe"));
const Footer = dynamic(() => import("@components/Footer"));

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Portfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
