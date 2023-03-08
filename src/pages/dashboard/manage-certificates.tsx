import CertificateItem from "@components/Dashboard/CertificateItem";
import DashboardWrapper from "@components/Dashboard/DashboardWrapper";
import { api } from "@utils/api";
import { handleHoverEffect } from "@utils/hoverCardEffect";
import type { NextPage } from "next";

const ManageCertificates: NextPage = () => {
  const certificates = api.certificate.getAll.useQuery({
    includeUnPublished: true,
  });

  return (
    <DashboardWrapper>
      <div
        id="hover-cards"
        onMouseMove={handleHoverEffect}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <CertificateItem />
        {certificates.data?.map((cert) => (
          <CertificateItem key={cert.id} data={cert} />
        ))}
      </div>
    </DashboardWrapper>
  );
};

export default ManageCertificates;
