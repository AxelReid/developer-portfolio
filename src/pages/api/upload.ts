/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import nextConnect from "next-connect";
import multer from "multer";
import type { NextApiRequest, NextApiResponse } from "next";
import type { UploadResponse } from "src/types";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import firebase from "@utils/firebase";
import { prisma } from "src/server/db";

// type MulterArrayFile = {
//   fieldname: string; //'file',
//   originalname: string; //'next-js-logo.png',
//   encoding: string; // '7bit',
//   mimetype: string; //'image/png',
//   destination: string; //'public/uploads',
//   filename: string; //'next-js-logo.png',
//   path: string; //'public/uploads/next-js-logo.png',
//   size: number; // 7211
// };
type MulterSingerFile = {
  fieldname: string; //'file',
  originalname: string; //'next-js-logo.png',
  encoding: string; // '7bit',
  mimetype: string; //'image/png',
  buffer: Buffer;
  size: number; // 7211
};

const apiRoute = nextConnect({
  onNoMatch(req: NextApiRequest, res: NextApiResponse<UploadResponse>) {
    res.status(405).json({ error: `Method '${req.method || ""}' Not Allowed` });
  },
  onError(error: { message?: string }, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error?.message || ""}` });
  },
});

const storage = getStorage(firebase);
const upload = multer({ storage: multer.memoryStorage() });

// Adds the middleware to Next-Connect
apiRoute.use(upload.single("file"));

// Process a POST request
apiRoute.post(async (req: NextApiRequest & { file: MulterSingerFile }, res) => {
  try {
    const storageRef = ref(storage, `projects/${req.file.originalname}`);
    const metadata = {
      contentType: req.file?.mimetype,
    };
    const snapshot = await uploadBytes(storageRef, req.file.buffer, metadata);
    const url = await getDownloadURL(snapshot.ref);
    const image = await prisma?.image.create({ data: { url } });

    res.status(200).json({
      data: {
        imageId: image?.id,
        message: "Sucessfully uploaded",
      },
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      error: (error as { message?: string })?.message || null,
    });
  }
});

export default apiRoute;
export const config = {
  api: {
    bodyParser: false,
  },
};
