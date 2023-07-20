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
            // setIsLoading(false);
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
                        <div className="flex flex-col gap-4 border-base-200 md:border-2 md:shadow-md rounded-box md:w-1/2 h-auto p-8">
                            <h1 className="text-4xl font-bold text-center">
                                Iniciar sesión
                            </h1>
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
                                    <input
                                        type="password"
                                        name="password"
                                        className="input input-bordered rounded-full"
                                        placeholder="********"
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                    />
                                </label>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
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
