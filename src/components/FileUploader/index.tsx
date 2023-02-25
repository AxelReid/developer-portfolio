import type { Dispatch, SetStateAction } from "react";
import { memo, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export interface LoadedImg extends File {
  preview: string;
}
interface Props {
  children?: React.ReactNode;
  className?: string;
  acceptClass?: string;
  rejectClass?: string;
  acceptContent?: React.ReactNode;
  rejectContent?: React.ReactNode;
  images: LoadedImg[];
  setImages: Dispatch<SetStateAction<LoadedImg[]>>;
  multiple?: boolean;
}

const FileUploader: React.FC<Props> = ({
  children,
  className = "",
  acceptClass = "",
  rejectClass = "",
  acceptContent,
  rejectContent,
  setImages,
  images,
  multiple = false,
}) => {
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      multiple,
      onDropAccepted: (acceptedFiles) => {
        setImages(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      },
    });

  useEffect(() => {
    return () =>
      images.forEach((file) => URL.revokeObjectURL(file?.preview || ""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      {...getRootProps()}
      className={`${className} ${isDragAccept ? acceptClass : ""} ${
        isDragReject ? rejectClass : ""
      }`}
    >
      <input {...getInputProps()} />
      {isDragAccept && acceptContent
        ? acceptContent
        : isDragReject && rejectContent
        ? rejectContent
        : children}
    </div>
  );
};

export default memo(FileUploader);
