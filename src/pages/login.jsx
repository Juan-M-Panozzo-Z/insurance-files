import IndexLayout from "./layouts/indexLayout";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(email, password);
    };

    return (
        <IndexLayout title="Login">
            <main className="grid place-items-center h-full">
                <div className="flex flex-col gap-4 border-base-200 border-2 shadow-md rounded-box md:w-1/2 h-auto p-8">
                    <h1 className="text-4xl font-bold text-center">
                        Iniciar sesión
                    </h1>
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <label className="flex flex-col gap-1">
                            <span className="text-lg font-semibold">Email</span>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered rounded-full"
                                placeholder="Email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </label>
                        <label className="flex flex-col gap-1">
                            <span className="text-lg font-semibold">
                                Contraseña
                            </span>

                            <input
                                type="password"
                                name="password"
                                className="input input-bordered rounded-full"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </label>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </main>
        </IndexLayout>
    );
}
