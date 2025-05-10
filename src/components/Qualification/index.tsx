import Title from "@components/Title";
import Divider from "./Divider";
import Work from "./Work";

export type WorkType = {
  title: string;
  company: string;
  desc?: string;
  site?: string;
  date: {
    start: string;
    end: string;
  };
};

const experience: WorkType[] = [
  {
    title: "Full-Stack Web Developer",
    company: "UNIIT Slovakia, Remote full-time",
    date: {
      start: "2023 Apr",
      end: "2025 Jan",
    },
  },
  {
    title: "Full-Stack Web Developer",
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
  //const certificates = api.certificate.getAll.useQuery();

  return (
    <section id="qualification" className="section overflow-hidden">
      <div className="container">
        <Title title="Experience" desc="Work history" />
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
        {/*<div className="mt-24 grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {certificates.data?.map((cert) => (
            <div key={cert.id} className={`relative rounded-lg`}>
              <Image
                src={cert.image?.url || ""}
                className="rounded-[inherit]"
                width={500}
                height={450}
                sizes="400px"
                alt=""
              />
              {cert.url && (
                <Link
                  className="bg hover:c-secondary absolute bottom-0 left-0 px-2 py-1 text-sm underline underline-offset-2 md:text-base"
                  href={cert.url}
                >
                  Proof of completion
                </Link>
              )}
            </div>
          ))}
        </div>
    */}
      </div>
    </section>
  );
};

export default Qualification;
