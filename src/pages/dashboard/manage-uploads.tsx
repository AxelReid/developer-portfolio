import type { NextPage } from "next";
import DashboardWrapper from "@components/Dashboard/DashboardWrapper";
import { api } from "@utils/api";
import { handleHoverEffect } from "@utils/hoverCardEffect";
import { useState } from "react";
import type { ImageType } from "src/types/infer";
import { XMarkIcon } from "@heroicons/react/20/solid";
import {
  ArrowUpTrayIcon,
  CheckCircleIcon,
  TrashIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import type { LoadedImg } from "@components/FileUploader";
import FileUploader from "@components/FileUploader";
import LoadingOverlay from "@components/Overlay/Loading";
import { uploader } from "@utils/uploader";

const ManageUploads: NextPage = () => {
  const dl = api.images.delete.useMutation();
  const images = api.images.getAll.useQuery();
  const [selected, setSelected] = useState<ImageType>();
  const [file, setFile] = useState<LoadedImg>();
  const [isAdding, setIsAdding] = useState(false);

  const selectImg = (img: ImageType) => {
    setSelected(img);
    document.body.scrollIntoView({ behavior: "smooth" });
  };
  const handleDl = async () => {
    try {
      if (!selected) return;
      const res = await dl.mutateAsync(selected);
      if (res) {
        setSelected(undefined);
        await images.refetch();
      }
    } catch (error) {}
  };

  const close = () => {
    setSelected(undefined);
    setFile(undefined);
  };
  const closeIcon = (
    <button
      className="b absolute top-2 left-2 rounded-full !bg-opacity-60 p-1 hover:!bg-opacity-100"
      onClick={close}
    >
      <XMarkIcon className="w-6" />
    </button>
  );

  const submitUpload = async () => {
    try {
      if (!file) return;
      setIsAdding(true);
      await uploader(file);
      setIsAdding(false);
      close();
      await images.refetch();
    } catch (error) {}
  };

  return (
    <>
      <DashboardWrapper>
        {selected ? (
          <div className="relative mb-8 flex flex-wrap gap-4">
            {closeIcon}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selected.url} alt="" className="max-h-80 rounded-lg" />
            <div>
              <p className="c-secondary">
                {new Intl.DateTimeFormat("en", {
                  dateStyle: "medium",
                  timeStyle: "short",
                }).format(selected.createdAt)}
              </p>
              <button
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={handleDl}
                disabled={dl.isLoading}
                className="btn relative mt-4"
              >
                <TrashIcon
                  className={`w-4 ${
                    dl.isLoading ? "text-transparent" : "text-red-500"
                  }`}
                />
                {dl.isLoading && (
                  <LoadingOverlay spinner={{ className: "w-4 h-4" }} />
                )}
              </button>
            </div>
          </div>
        ) : file ? (
          <div className="relative w-fit">
            {closeIcon}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={file.preview} alt="" className="max-h-80 rounded-lg" />
            <div className="absolute left-2 bottom-3 right-2 z-[1] flex justify-center">
              <button
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={submitUpload}
                disabled={isAdding}
                className="btn btn-light relative z-[1] px-4 py-1.5 text-sm font-medium"
              >
                <span className={`${isAdding ? "opacity-0" : ""}`}>Upload</span>
                {isAdding && (
                  <LoadingOverlay spinner={{ className: "w-4 h-4" }} />
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="relative">
            <FileUploader
              images={file ? [file] : []}
              getImages={(imgs) => setFile(imgs[0])}
              className="bb c-secondary flex h-80 w-full max-w-[320px] flex-col items-center justify-center rounded-lg p-4"
              acceptClass="!border-green-500 !text-green-500 shadow-lg shadow-green-500/10"
              rejectClass="!border-red-500 !text-red-500 shadow-lg shadow-red-500/10"
              acceptContent={
                <>
                  <CheckCircleIcon className="w-7" />
                  <span className="mt-3 text-sm">Release it!</span>
                </>
              }
              rejectContent={
                <>
                  <XCircleIcon className="w-7" />
                  <span className="mt-3 text-sm">Not accepted!</span>
                </>
              }
            >
              <ArrowUpTrayIcon className="w-7" strokeWidth={1} />
              <span className="mt-3 text-sm">Drag & Drop or Click</span>
            </FileUploader>
          </div>
        )}
        <div>
          <div className="z-[1] py-4">
            <h1 className="text-xl">
              Images
              <span className="ml-2 text-sm">({images.data?.length ?? 0})</span>
            </h1>
          </div>
          <div
            onMouseMove={handleHoverEffect}
            id="hover-cards"
            className="columns-2 gap-2 min-[500px]:columns-3 sm:columns-4 md:columns-5 lg:columns-6 xl:columns-7"
          >
            {images.data?.map((img) => (
              <button
                id="hover-card"
                key={img.id}
                className="relative mt-2 w-full overflow-hidden rounded-lg p-px"
                onClick={() => selectImg(img)}
              >
                <span id="hover-card-overlay" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.url}
                  loading="lazy"
                  className="w-full rounded-[inherit]"
                  alt=""
                />
              </button>
            ))}
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
};

export default ManageUploads;
