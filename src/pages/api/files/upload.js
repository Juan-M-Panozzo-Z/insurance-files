import multiparty from "multiparty";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import mime from "mime-types";
import crypto from "crypto";

const generateRandomString = (length) => {
    return crypto.randomBytes(length).toString("hex");
};

export default async function handle(req, res) {
    const { method } = req;

    switch (method) {
        case "POST":
            const form = new multiparty.Form();
            const { fields, files } = await new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) return reject(err);
                    resolve({ fields, files });
                });
            });
            const client = new S3Client({
                region: process.env.AWS_REGION,
                endpoint: process.env.AWS_ENDPOINT,
                credentials: {
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                },
            });
            const links = [];
            for (const file of files.file) {
                const ext = file.originalFilename.split(".").pop();
                const newFileName = `${generateRandomString(24)}.${ext}`;
                await client.send(
                    new PutObjectCommand({
                        Bucket: process.env.AWS_BUCKET_NAME,
                        Key: newFileName,
                        Body: fs.readFileSync(file.path),
                        ContentType: mime.lookup(file.path),
                    })
                );
                const link = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${newFileName}`;
                links.push(link);
            }
            res.status(200).json({ links });
            break;

        default:
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};