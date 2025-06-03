interface Props {
  title: React.ReactNode | string;
  desc: React.ReactNode | string;
  className?: string;
}
const Title: React.FC<Props> = ({ title, desc, className = "" }) => {
  return (
    <div
      className={`content container mb-14 flex w-full flex-col items-start ${className}`}
    >
      <h2 className="mb-2 text-5xl font-extrabold">{title}</h2>
      <div className="flex w-full items-center space-x-3">
        <div className="w-10 border-t border-zinc-400 dark:border-gray-500 sm:w-24 " />
        <p className="text-gradient whitespace-nowrap text-xl font-light">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Title;
