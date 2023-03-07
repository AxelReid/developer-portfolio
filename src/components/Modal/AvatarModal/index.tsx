import type { LoadedImg } from "@components/FileUploader";
import FileUploader from "@components/FileUploader";
import { PlusIcon } from "@heroicons/react/24/outline";
import { api } from "@utils/api";
import Image from "next/image";
import { forwardRef, useImperativeHandle, useRef } from "react";
import type { ImageType } from "src/types/infer";
import type { ModalMutableRefProps } from "src/types/modalRef";
import Modal from "..";

interface Props {
  avatar: LoadedImg | ImageType | undefined;
  getAvatar: (img: ImageType | LoadedImg) => void;
}

const AvatarModal = ({ avatar, getAvatar }: Props, ref: React.Ref<unknown>) => {
  const modalRef: ModalMutableRefProps = useRef(null);
  const allImages = api.images.getAll.useQuery(undefined, { enabled: false });

  const close = () => modalRef.current?.close();
  useImperativeHandle(ref, () => ({
    open: () => {
      modalRef.current?.open();
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      allImages.refetch();
    },
    close,
  }));

  return (
    <Modal ref={modalRef}>
      <div className="flex flex-wrap gap-4">
        <FileUploader
          onSuccess={close}
          images={(avatar as LoadedImg)?.size ? ([avatar] as LoadedImg[]) : []}
          getImages={(imgs) => getAvatar(imgs[0] as LoadedImg)}
          className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-black/5 dark:bg-white/5"
        >
          <PlusIcon className="w-6" />
        </FileUploader>
        {allImages.data?.map((img) => (
          <button
            onClick={() => {
              getAvatar(img);
              close();
            }}
            key={img.id}
            className="relative h-16 w-16 flex-shrink-0 rounded-full bg-black/5 dark:bg-white/5"
          >
            <Image
              src={img.url}
              sizes="300px"
              fill
              alt=""
              className="rounded-[inherit] object-cover"
            />
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default forwardRef(AvatarModal);
