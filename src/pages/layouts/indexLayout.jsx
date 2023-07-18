import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import Drawer from "../components/Drawer";
export default function IndexLayout({ children, ...props }) {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get("/api/auth");
            } catch (err) {
                router.push("/login");
            }
        };
        checkAuth();
    }, [router]);

    return (
        <main>
            <Head>
                <title>{`${props.title} | ART & Seguros Sanatorio Concordia`}</title>
            </Head>
            <Drawer>{children}</Drawer>
        </main>
    );
}
