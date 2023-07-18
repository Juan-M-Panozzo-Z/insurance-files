import "../styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import CardLoading from "./components/CardLoading";

export default function App({ Component, ...pageProps }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                setIsLoading(false);
                await axios.get("/api/auth");
            } catch (err) {
                router.push("/login");
            }
        };
        checkAuth();
    }, [router]);

    return isLoading ? (
        <CardLoading title="Cargando interfaz" />
    ) : (
        <>
            <Component {...pageProps} />
        </>
    );
}
