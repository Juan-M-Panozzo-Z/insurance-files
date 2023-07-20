import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
    dbConnect();
    if (req.method === "GET") {
        const users = await User.find({}).select("-password");
        res.status(200).json({ success: true, data: users });
    }
    if (req.method === "POST") {
        const { email, password } = req.body;

        const user = await User.create({ name, email, password });
        res.status(201).json({ success: true, data: user });
    }
    if (req.method === "PUT") {
        const { alias, name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ success: false, message: "User not found" });
        }
        if (alias) user.alias = alias;
        if (name) user.name = name;
        if (password) user.password = password;
        await user.save();
        res.status(200).json({ success: true, data: user });
    }
    res.status(400).json({ success: false });
}
