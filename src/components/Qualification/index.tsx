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
    <section id="qualification" className="section overflow-hidden">
      <div className="container">
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
        {/* <div className="mt-20 border-l-4 border-black">
          <Carousel>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="embla__slide -ml-px flex-[0_0_33%]">
                <h1 className="px-6 text-5xl font-semibold">2023</h1>
                <div className="relative mt-2">
                  <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-zinc-300 to-transparent" />
                  <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-zinc-300 to-transparent" />
                  <div className="flex w-full items-center justify-between border-b border-zinc-300 px-6 py-2">
                    <p className="c-secondary sticky left-4 w-fit">October</p>
                    <p className="c-secondary sticky left-4 w-fit">February</p>
                  </div>
                  <div className="mt-10 px-6">
                    <h2 className="text-2xl font-medium">Frontend Engineer</h2>
                    <p className="c-secondary">Tinfis Global, Tashkent</p>
                    <p className="mt-2 opacity-90">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor obcaecati iste neque officiis sint ex.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div> */}
      </div>
    </section>
  );
};

export default Qualification;
