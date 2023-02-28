import type { LoadedImg } from "@components/FileUploader";
import axios from "axios";

// const config: AxiosRequestConfig<FormData> = {
//   headers: { "content-type": "multipart/form-data" },
//   onUploadProgress: (event) => {
//     console.log(
//       `Current progress:`,
//       Math.round((event.loaded * 100) / (event?.total || 1))
//     );
//   },
// };

export const uploader = async (file: LoadedImg) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("/api/upload", formData);

    return (res.data as { data: { imageId: string } })?.data.imageId;
  } catch (error) {
    return null;
  }
};
