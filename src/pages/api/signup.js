import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
    dbConnect();
    if (req.method === "POST") {
        const { email, password } = req.body;

        const user = await User.create({ email, password });
        res.status(201).json({ success: true, data: user });
    }
    if (req.method === "PUT") {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ success: false, message: "User not found" });
        }
        user.password = password;
        await user.save();
        res.status(200).json({ success: true, data: user });
    }
    res.status(400).json({ success: false });
}
