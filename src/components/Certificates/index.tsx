import React from "react";
import Title from "@components/Title";
import Certificate from "./Certificate";
import { api } from "@utils/api";

const Certificates = () => {
  const certificates = api.certificate.getAll.useQuery();

  return (
    <div id="certificates" className="sTo">
      <Title title="Certificates" desc="Something to share" />

      <div className="content container">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {certificates.data?.map((cert, i) => (
            <Certificate
              key={i}
              imageUrl={cert.image?.url || ""}
              proofUrl={cert.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
