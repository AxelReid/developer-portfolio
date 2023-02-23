import type { LoadedImg } from "@components/FileUploader";
import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import type { UploadResponse } from "src/pages/api/upload";

const config: AxiosRequestConfig<FormData> = {
  headers: { "content-type": "multipart/form-data" },
  onUploadProgress: (event) => {
    console.log(
      `Current progress:`,
      Math.round((event.loaded * 100) / (event?.total || 1))
    );
  },
};

export const uploader = async (files: LoadedImg[] = []) => {
  try {
    const formData = new FormData();
    for (const file of files) {
      formData.append("file", file);
    }
    const res = await axios.post("/api/upload", formData, config);
    return res.data as UploadResponse;
  } catch (error) {
    return (error as { response: { data: UploadResponse } })?.response?.data;
  }
};
