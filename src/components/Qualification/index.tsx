import Title from "@components/Title";
import Divider from "./Divider";
import Work from "./Work";

const experience = [
  {
    title: "Fullstack Web Developer",
    company: "Freelancing",
    date: {
      start: "2022 Oct",
      end: "Present",
    },
  },
  {
    title: "Lead Frontend Engineer",
    company: "Tinfis Global",
    site: "tinfis.uz",
    date: {
      start: "2022 Feb",
      end: "2022 Oct",
    },
  },
  {
    title: "Lead Frontend Engineer",
    company: "Napa Automotive",
    site: "napaautomotive.uz",
    date: {
      start: "2021 Dec",
      end: "2022 March",
    },
  },
  {
    title: "Frontend Web Developer",
    company: "Radiomer UZ",
    date: {
      start: "2021 Apr",
      end: "2021 Aug",
    },
  },
];

const Qualification = () => {
  return (
    <section id="qualification" className="section container">
      <div>
        <Title title="Qualification" desc="My personel journey" />
        <div>
          {experience.map((ex, i) => {
            const odd = i % 2;
            return (
              <div
                key={i}
                className={`relative flex justify-center ${
                  odd ? "flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:flex-[0.5]"></div>
                <Divider i={i} length={experience.length} />
                <div className="flex-1 md:flex-[0.5]">
                  <Work
                    {...ex}
                    className={`pt-11 md:pt-7 ${
                      odd ? "items-start" : "md:items-end md:text-right"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
