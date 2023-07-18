import "../styles/globals.css";
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function App({ Component, ...pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("/api/auth");
                console.log(response.data);
            } catch (error) {
                router.push("/login");
            }
        };

        checkAuth();
    }
    , []);

    return <Component {...pageProps} />;
}