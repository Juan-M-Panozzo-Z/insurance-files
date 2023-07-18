import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import jwt from "jsonwebtoken";
import cookie from "cookie";

dbConnect();

export default async function auth(req, res) {
    const { method } = req;

    switch (method) {
        case "POST":
            try {
                const { email, password } = req.body;

                // Busca el usuario por email
                const user = await User.findOne({ email });

                if (!user) {
                    return res
                        .status(401)
                        .json({ message: "Invalid credentials" });
                }

                // Compara la contraseña ingresada por el usuario con la contraseña almacenada en la base de datos
                user.comparePassword(password, (err, isMatch) => {
                    if (err || !isMatch) {
                        return res
                            .status(401)
                            .json({ message: "Invalid credentials" });
                    }

                    // Si la contraseña es correcta, genera un token y lo guarda en una cookie
                    const token = jwt.sign(
                        { userId: user._id },
                        process.env.JWT_SECRET
                    );
                    res.setHeader(
                        "Set-Cookie",
                        cookie.serialize("token", token, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV !== "development",
                            sameSite: "strict",
                            maxAge: 3600, // 1 hour
                            path: "/",
                        })
                    );
                    return res
                        .status(200)
                        .json({ message: "Logged in successfully" });
                });
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: "Server error" });
            }
            break;
        case "DELETE":
            try {
                // Elimina la cookie que contiene el token
                res.setHeader(
                    "Set-Cookie",
                    cookie.serialize("token", "", {
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== "development",
                        sameSite: "strict",
                        expires: new Date(0),
                        path: "/",
                    })
                );
                res.status(200).json({ message: "Logged out successfully" });
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: "Server error" });
            }
            break;
        default:
            res.setHeader("Allow", ["POST", "DELETE"]);
            res.status(405).json({ message: `Method ${method} Not Allowed` });
    }
}
