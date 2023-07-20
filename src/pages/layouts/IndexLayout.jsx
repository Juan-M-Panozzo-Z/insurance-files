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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });
            console.log(data);
            if (data?.status === 200) {
                router.push("/");
            }
        } catch (e) {
            console.error(e);
        }
    };

    if (!session) {
        return (
            <main>
                <Head>
                    <title>{`${pageProps.title} | ART & Seguros Sanatorio Concordia`}</title>
                </Head>
                <main className="grid place-items-center h-screen">
                    <div className="flex flex-col gap-4 border-base-200 border-2 shadow-md rounded-box md:w-1/2 h-auto p-8">
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
