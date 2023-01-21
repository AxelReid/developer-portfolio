import Modal from "@components/Modal";
import { services } from "@static/services";
import Image from "next/image";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type { ModalMutableRefProps } from "src/types/modalRef";
import type { ServiceProps } from "src/types/service";

const DetailsModal = ({}, ref: React.Ref<unknown> | null) => {
  const modalRef: ModalMutableRefProps = useRef(null);
  const [service, setService] = useState<ServiceProps | null>(null);

  useImperativeHandle(ref, () => ({
    open: (serviceId: number) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setService(services?.find(({ id }) => id === serviceId) ?? null);
      modalRef.current?.open();
    },
    close: () => modalRef.current?.close(),
  }));

  return (
    <Modal ref={modalRef}>
      <div className="flex flex-col items-center">
        <Image
          src={service?.img || ""}
          width={100}
          height={80}
          className="opacity-75 hue-rotate-180 dark:invert"
          alt=""
        />
        <h3 className="mt-10 text-center text-2xl">{service?.title}</h3>
      </div>
    </Modal>
  );
};

export default forwardRef(DetailsModal);
