import Skill from "./Skill";

interface Props {
  title: string;
  data: { name: string; level: string }[];
}

const SkillsWrapper: React.FC<Props> = ({ title, data }) => {
  return (
    <div
      className="bb embla__slide flex-[0_0_calc(100%-20px)]
      rounded-2xl
      p-10
      min-[400px]:flex-[0_0_min(500px,calc(90%-10px))]
      lg:flex-[0_0_calc(50%-20px)]"
    >
      <h3 className="mt-5 text-center text-xl">{title}</h3>
      <div className="mt-14 grid grid-cols-1 min-[550px]:grid-cols-2">
        {data.map((f, i) => (
          <Skill key={i} name={f.name} level={f.level} />
        ))}
      </div>
    </div>
  );
};

export default SkillsWrapper;
