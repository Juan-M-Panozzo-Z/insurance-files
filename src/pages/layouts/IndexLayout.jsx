import Head from "next/head";
import Drawer from "../components/Drawer";
import { SessionProvider } from "next-auth/react";


export default function IndexLayout({ children, ...props }) {
    return (
        <main>
            <SessionProvider>
                <Head>
                    <title>{`${props.title} | ART & Seguros Sanatorio Concordia`}</title>
                </Head>
                <Drawer>{children}</Drawer>
            </SessionProvider>
        </main>
    );
}
