import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "./ui/Button";

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
    <div className={`pb-4 ${className}`}>
      <h1 className="mb-4 text-xl">
        {title}
        {typeof count === "number" && (
          <span className="ml-2 text-sm">({count})</span>
        )}
      </h1>
      <Button
        icon={<PlusIcon className="w-5" />}
        className="mb-4"
        onClick={click}
      >
        {btnTitle}
      </Button>
    </div>
  );
};

export default TitleWithBtn;
