import auth from "./auth";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "1mb",
        },
    },
};

export default function login(req, res) {
    const { method } = req;

    switch (method) {
        case "POST":
        case "DELETE":
            auth(req, res);
            break;
        default:
            res.setHeader("Allow", ["POST", "DELETE"]);
            res.status(405).json({ message: `Method ${method} Not Allowed` });
    }
}
