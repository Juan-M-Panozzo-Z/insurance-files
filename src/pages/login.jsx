import IndexLayoutNoAuth from "./layouts/indexLayoutNoAuth";
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password)
    };
      

    return (
        <IndexLayoutNoAuth title="Login">
            <main className="grid place-items-center h-full">
                <div className="flex flex-col gap-4 border-base-200 border-2 shadow-md rounded-box md:w-1/2 h-auto p-8">
                    <h1 className="text-4xl font-bold text-center">
                        Iniciar sesión
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label className="flex flex-col gap-1">
                            <span className="text-lg font-semibold">Email</span>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered rounded-full"
                                placeholder="Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </label>
                        <label className="flex flex-col gap-1">
                            <span className="text-lg font-semibold">Contraseña</span>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered rounded-full"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </label>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                        {error && (
                            <div className="alert alert-error">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>¡Ups! Hubo un error con las credenciales, vuelve a intentarlo</span>
                            </div>
                        )}
                    </form>
                </div>
            </main>
        </IndexLayoutNoAuth>
    );
}
