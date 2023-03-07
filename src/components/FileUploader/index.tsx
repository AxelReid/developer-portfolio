import { memo, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export interface LoadedImg extends File {
  preview: string;
}

export interface FileUploadProps {
  children?: React.ReactNode;
  className?: string;
  acceptClass?: string;
  rejectClass?: string;
  acceptContent?: React.ReactNode;
  rejectContent?: React.ReactNode;
  multiple?: boolean;
  images: LoadedImg[];
  getImages: (imgs: LoadedImg[]) => void;
  onSuccess?: () => void;
}

const FileUploader: React.FC<FileUploadProps> = ({
  children,
  className = "",
  acceptClass = "",
  rejectClass = "",
  acceptContent,
  rejectContent,
  multiple = false,
  images,
  getImages,
  onSuccess,
}) => {
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      multiple,
      onDropAccepted: (acceptedFiles) => {
        getImages(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        if (typeof onSuccess === "function") onSuccess();
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
