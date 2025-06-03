import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;
  proofUrl: string | null;
};

const Certificate = ({ imageUrl, proofUrl }: Props) => {
  return (
    <div className="relative rounded-lg">
      <Image
        src={imageUrl || ""}
        className="rounded-[inherit]"
        width={500}
        height={450}
        sizes="400px"
        alt=""
      />
      {proofUrl && (
        <Link
          className="bg hover:c-secondary absolute bottom-0 left-0 rounded-tr-md px-2 pb-1 text-sm  underline underline-offset-4 "
          href={proofUrl}
        >
          Proof of completion
        </Link>
      )}
    </div>
  );
};

export default Certificate;
