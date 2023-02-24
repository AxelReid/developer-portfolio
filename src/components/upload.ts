// import nextConnect from "next-connect";
// import multer from "multer";
// import type { NextApiRequest, NextApiResponse } from "next";

// type MulterFile = {
//   fieldname: string; //'file',
//   originalname: string; //'next-js-logo.png',
//   encoding: string; // '7bit',
//   mimetype: string; //'image/png',
//   destination: string; //'public/uploads',
//   filename: string; //'next-js-logo.png',
//   path: string; //'public/uploads/next-js-logo.png',
//   size: number; // 7211
// };

export interface UploadResponse {
  data?: {
    message: string;
    files: string[];
  } | null;
  error?: string | null;
}

// const apiRoute = nextConnect({
//   // Handle any other HTTP method
//   onNoMatch(req: NextApiRequest, res: NextApiResponse<UploadResponse>) {
//     res.status(405).json({ error: `Method '${req.method || ""}' Not Allowed` });
//   },
//   onError(error: { message?: string }, req, res) {
//     res
//       .status(501)
//       .json({ error: `Sorry something Happened! ${error?.message || ""}` });
//   },
// });

// export const dest = "public/uploads/";

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: dest,
//     filename: (req, file, cb) => cb(null, file.originalname),
//   }),
// });

// // Adds the middleware to Next-Connect
// apiRoute.use(upload.array("file"));

// // Process a POST request
// apiRoute.post((req: NextApiRequest & { files: MulterFile[] }, res) => {
//   try {
//     res.status(200).json({
//       data: {
//         files: req.files.map((file) => file.path.replace("public", "")),
//         message: "Sucessfully uploaded",
//       },
//       error: null,
//     });
//   } catch (error) {
//     res.status(500).json({
//       data: null,
//       error: (error as { message?: string })?.message || null,
//     });
//   }
// });

// export default apiRoute;
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
