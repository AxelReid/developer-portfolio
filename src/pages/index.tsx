import { type NextPage } from "next";
import dynamic from "next/dynamic";
import { signIn, signOut, useSession } from "next-auth/react";

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

import { api } from "../utils/api";

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

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="btn btn-darker rounded-full px-10 py-3 font-semibold"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
