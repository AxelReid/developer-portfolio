import Image from "next/image";
import Link from "next/link";
import type { ProjectType } from "src/types/infer";
import Tag from "./Tag";

const Project: React.FC<ProjectType> = ({
  title,
  image,
  tags = [],
  demo_link,
  source_link,
}) => {
  return (
    <div
      id="hover-card"
      className="mb-2 inline-block w-full break-inside-avoid overflow-hidden rounded-xl p-4"
    >
      <span id="hover-card-overlay" />
      {image?.url && (
        <Image
          src={image.url}
          width={500}
          height={400}
          sizes="500px"
          className="rounded-[inherit] object-cover"
          alt=""
        />
      )}
      <div className="mt-4">
        <h3 className="text-xl font-medium">{title}</h3>
        {tags?.length > 0 ? (
          <div className="my-4 flex flex-wrap gap-1.5">
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */}
            {tags.map((tag, i) => (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              <Tag key={i} name={tag.name} />
            ))}
          </div>
        ) : null}
        <div className="flex space-x-5 text-sm">
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
    </div>
  );
};

export default Project;
