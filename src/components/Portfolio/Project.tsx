import Image from "next/image";
import Link from "next/link";
import type { ProjectType } from "src/types/infer";
import Tag from "./Tag";

const Project: React.FC<ProjectType> = ({
  title,
  image,
  tags,
  demo_link,
  source_link,
}) => {
  return (
    <div
      id="hover-card"
      className="flex flex-col justify-between rounded-2xl p-6"
    >
      <span id="hover-card-overlay" />
      <div>
        <div className="relative aspect-[9/6] rounded-2xl bg-black/5 dark:bg-zinc-700">
          {image && <Image src={image} fill className="object-cover" alt="" />}
        </div>
        <h3 className="mt-7 text-xl font-medium">{title}</h3>
        <div className="my-5 flex flex-wrap gap-1.5">
          {tags?.map((tag, i) => (
            <Tag key={i} name={tag.name} />
          ))}
        </div>
      </div>
      <div className="flex space-x-10 text-sm">
        {source_link && (
          <Link
            href={source_link}
            target="_blank"
            className="c-secondary hover:text-current"
          >
            Github Repo
          </Link>
        )}
        {demo_link && (
          <Link
            href={demo_link}
            target="_blank"
            rel="noreferrer"
            className="c-secondary hover:text-current"
          >
            View Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default Project;
