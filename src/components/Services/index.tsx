"use client";

import Carousel from "@components/Carousel";
import Title from "@components/Title";
import { services } from "@data/services";
import { useRef } from "react";
import type { ModalMutableRefProps } from "src/types/modalRef";
import DetailsModal from "./DetailsModal";
import Service from "./Service";

const Services = () => {
  const modalRef: ModalMutableRefProps<number> = useRef(null);

  const handleModal = (serviceId: number) => {
    modalRef.current?.open(serviceId);
  };

  return (
    <>
      <section id="services" className="section overflow-hidden">
        <div className="container">
          <Title title="Services" desc="What I offer" />
          <Carousel className="space-x-5 lg:space-x-10">
            {services.map((service) => (
              <Service
                key={service.id}
                {...service}
                openModal={() => handleModal(service.id)}
              />
            ))}
          </Carousel>
        </div>
      </section>
      <DetailsModal ref={modalRef} />
    </>
  );
};

export default Services;
