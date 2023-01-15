import Image from "next/image";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import type { ServiceProps } from "src/types/service";

interface Props extends ServiceProps {
  openModal: () => void;
}

const Service: React.FC<Props> = ({
  title,
  description,
  img,
  techs,
  more,
  openModal,
}) => {
  return (
    <>
      <div
        style={
          {
            // border: '1px solid transparent',
            // backgroundImage: `linear-gradient(black,black),
            //               linear-gradient(to right, blue, gold)`,
            // backgroundOrigin: 'border-box',
            // backgroundClip: 'padding-box, border-box',
          }
        }
        className="embla__slide
        bb
        flex
        flex-[0_0_calc(100%-20px)]
        flex-col
        justify-between
        rounded-2xl
        p-10 min-[400px]:flex-[0_0_calc(90%-20px)] sm:flex-[0_0_calc(65%-10px)] md:flex-[0_0_calc(47%-10px)] lg:flex-[0_0_calc(40%-20px)] xl:flex-[0_0_calc(33%-20px)]"
      >
        <div>
          <Image
            src={img}
            width={100}
            height={80}
            className="opacity-75 hue-rotate-180 dark:invert"
            alt=""
          />
          <h3 className="mt-10 text-2xl">{title}</h3>
          <p className="c-secondary mt-3 !text-opacity-70">{description}</p>
          <div className="my-7 space-y-3">
            {techs.map((tech, i) => (
              <div className="c-secondary flex items-center space-x-3" key={i}>
                <CheckCircleIcon className="w-6" />
                <p className="text-lg">{tech}</p>
              </div>
            ))}
            {more && (
              <div className="c-secondary flex items-center space-x-3">
                <div className="w-6" />
                <p>more</p>
              </div>
            )}
          </div>
        </div>
        <div className="pt-4">
          <button
            onClick={openModal}
            className="c-secondary flex items-center gap-1 transition-[gap] hover:gap-3"
          >
            <span>Details</span>
            <ArrowSmallRightIcon className="w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Service;
