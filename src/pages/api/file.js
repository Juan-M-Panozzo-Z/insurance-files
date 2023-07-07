import { File } from "../../models/File";
import dbConnect from "../../lib/dbConnect";

export default async function handler(req, res) {
    await dbConnect();
    const { method } = req;
    const { dni, _id } = req.query;

    switch (method) {
        case "GET":
            if (dni) {
                try {
                    const file = await File.find({ dni });
                    if (!file) {
                        return res.status(400).json({ success: false });
                    }
                    res.status(200).json(file);
                } catch (error) {
                    res.status(400).json({ success: false });
                }
            }
            else if (_id) {
                try {
                    const file = await File.findById({ _id });
                    if (!file) {
                        return res.status(400).json({ success: false });
                    }
                    res.status(200).json(file);
                } catch (error) {
                    res.status(400).json({ success: false });
                }
            } else {
                try {
                    const files = await File.find({});
                    res.status(200).json(files);
                } catch (error) {
                    res.status(400).json({ success: false });
                }
            }
            break;
        case "POST":
            try {
                const file = await File.create({ ...req.body });
                res.status(201).json({ success: true, data: file });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case "PUT":
            try {
                const file = await File.updateOne(
                    { _id: req.query._id },
                    { ...req.body }
                );
                res.status(200).json({ success: true, data: file });
            } catch (error) {
                res.status(400).json({ success: false });
            }
        case "DELETE":
            if (req.query._id === "totalErase") {
                try {
                    await File.deleteMany({});
                    res.status(200).json({ success: true });
                } catch (error) {
                    res.status(400).json({ success: false });
                }
            } else {
                try {
                    const file = await File.findByIdAndDelete({
                        _id: req.query._id,
                    });
                    if (!file) {
                        return res.status(400).json({ success: false });
                    }
                    res.status(200).json({ success: true, data: file });
                } catch (error) {
                    res.status(400).json({ success: false });
                }
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
