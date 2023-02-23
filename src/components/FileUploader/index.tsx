import type { Dispatch, SetStateAction } from "react";
import { memo, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export interface LoadedImg extends File {
  preview: string;
}
interface Props {
  children?: React.ReactNode;
  className?: string;
  images: LoadedImg[];
  setImages: Dispatch<SetStateAction<LoadedImg[]>>;
  multiple?: boolean;
}

const FileUploader: React.FC<Props> = ({
  children,
  className,
  setImages,
  images,
  multiple = false,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple,
    onDrop: (acceptedFiles) => {
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
    <div {...getRootProps()} className={className}>
      <input {...getInputProps()} />
      {children}
    </div>
  );
};

export default memo(FileUploader);
