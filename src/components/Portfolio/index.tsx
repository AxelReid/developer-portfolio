import Title from "@components/Title";
import Projects from "./Projects";

const Qualification = () => {
  return (
    <section id="portfolio" className="sTo section container">
      <Title title="Portfolio" desc="Most recent work" />
      <Projects projects={[]} />
    </section>
  );
};

export default Qualification;
