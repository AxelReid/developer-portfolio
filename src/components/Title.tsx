interface Props {
  title: React.ReactNode | string;
  desc: React.ReactNode | string;
  className?: string;
}
const Title: React.FC<Props> = ({ title, desc, className = "" }) => {
  return (
    <div className={`mb-28 flex flex-col items-center ${className}`}>
      <h2 className="mb-3 text-5xl font-bold">{title}</h2>
      <p className="text-gradient text-xl font-light">{desc}</p>
    </div>
  );
};

export default Title;
