import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import Drawer from "../components/Drawer";

export default function IndexLayout({ children, ...pageProps }) {
    const { data: session } = useSession();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            const data = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });
            if (data?.status === 200) {
                router.push("/");
                return null;
            }
            setIsLoading(false);
            setError("Email o contraseña incorrectos");
            setEmail("");
            setPassword("");
        } catch (e) {
            setIsLoading(false);
            console.error(e);
        }
    };

    if (!session) {
        return (
            <main>
                <Head>
                    <title>{`${pageProps.title} | ART & Seguros Sanatorio Concordia`}</title>
                </Head>
                <section className="grid place-items-center h-screen">
                    <div className="flex flex-col gap-4 md:shadow-xl rounded-box md:w-2/3 h-auto p-12">
                        <div className="flex flex-col gap-4 text-center">
                            <h1 className="text-2xl md:text-4xl">
                                Bienvenid@ a Fichero Digital
                            </h1>
                            <p className="text-sm md:text-lg">
                                Inicia sesión para acceder a los archivos
                            </p>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                        >
                            <label className="flex flex-col gap-1">
                                <span className="text-lg font-semibold">
                                    Email
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered rounded-full"
                                    placeholder="ejemplo@mail.com"
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
                                <div className="flex items-center">
                                    <input
                                        type={
                                            isPasswordVisible
                                                ? "text"
                                                : "password"
                                        }
                                        name="password"
                                        className="input input-bordered rounded-full w-full"
                                        placeholder="********"
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                    />
                                    <button
                                        className="ml-2 p-2 input input-bordered rounded-full"
                                        type="button"
                                        onClick={() =>
                                            setIsPasswordVisible(
                                                !isPasswordVisible
                                            )
                                        }
                                    >
                                        {isPasswordVisible ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </label>
                            <button type="submit" className="btn btn-primary">
                                {isLoading ? (
                                    <span className="loading loading-spinner loading-md"></span>
                                ) : (
                                    "Iniciar sesión"
                                )}
                            </button>
                        </form>
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
                                <span>{error}</span>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main>
            <Head>
                <title>{`${pageProps.title} | ART & Seguros Sanatorio Concordia`}</title>
            </Head>
            <Drawer>{children}</Drawer>
        </main>
    );
}
