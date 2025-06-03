import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { WorkType } from "./helpers";
interface Props extends WorkType {
  className?: string;
}

const Work: React.FC<Props> = ({
  title,
  company,
  site,
  date,
  className = "",
  desc,
}) => {
  return (
    <div className={`relative flex flex-col ${className}`}>
      <div className="absolute right-[calc(100%+1rem)] top-0.5 h-7 w-7 rounded-full border border-zinc-300 p-1 dark:border-zinc-600">
        <div className="h-full w-full rounded-full border-4 border-zinc-300   bg-zinc-50 dark:border-zinc-600 dark:bg-[#121212]"></div>
      </div>

      <h4 className="text-xl font-medium md:text-2xl">{title}</h4>
      <div className="c-secondary mt-1 mb-4 flex items-center gap-2 text-sm md:text-base">
        <p>{company}</p>
        {site && (
          <>
            -
            <a
              href={"https://" + site}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline-offset-2 hover:underline"
            >
              {site}
            </a>
          </>
        )}
      </div>
      {/* <p className="mb-2 italic">{desc}</p> */}
      <div className="c-secondary flex items-center gap-1.5 text-sm md:text-base">
        <CalendarDaysIcon className="-mt-0.5 h-5 w-5" />
        <p>{date.start}</p>-<p>{date?.end || "Present"}</p>
      </div>
    </div>
  );
};

export default Work;
