import { PlusIcon } from "@heroicons/react/24/outline";

interface Props {
  click: () => void;
  count?: number;
  className?: string;
  title: string;
  btnTitle: string;
}

const TitleWithBtn: React.FC<Props> = (props) => {
  const { click, count, className = "", title, btnTitle } = props;

  return (
    <div className={`br border-0 border-b pb-10 ${className}`}>
      <h1 className="mb-4 text-xl">
        {title}
        {typeof count === "number" && (
          <span className="ml-2 text-sm">({count})</span>
        )}
      </h1>
      <button className="btn mb-4 flex items-center gap-3 px-3" onClick={click}>
        <PlusIcon className="w-5" />
        {btnTitle}
      </button>
    </div>
  );
};

export default TitleWithBtn;
