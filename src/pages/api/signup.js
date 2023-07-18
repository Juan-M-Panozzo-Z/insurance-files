import dbConnect from "../../lib/dbConnect";
import {User} from "../../models/User";

dbConnect();

export default async function signup(req, res) {
    const { method, body } = req;

    switch (method) {
        case "GET": 
            res.status(200).json({ message: "Signup route" });
            break;
        case "POST":
            try {
                const { email, password } = body;

                const user = new User({ email, password });
                await user.save();

                return res
                    .status(201)
                    .json({ message: "User created successfully" });
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: "Server error" });
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).json({ message: `Method ${method} Not Allowed` });
    }
}