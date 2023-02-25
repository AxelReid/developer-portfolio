import type { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/images/uploads");
    options.filename = (name, ext, path, form) =>
      path.originalFilename as string;
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler: NextApiHandler<{ url: string }> = async (req, res) => {
  try {
    await fs.readdir(
      path.join(process.cwd() + "/public", "/images", "/uploads")
    );
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/images", "/uploads"));
  }
  const { files } = await readFile(req, true);
  const fileName = (files.file as { newFilename: string })?.newFilename;

  res.json({ url: "/images/uploads/" + fileName });
};

export default handler;
