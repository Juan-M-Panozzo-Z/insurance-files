import Head from "next/head";
import Drawer from "../components/Drawer";
export default function IndexLayout({ children, ...props }) {
    return (
        <main>
            <Head>
                <title>{`${props.title} | ART & Seguros Sanatorio Concordia`}</title>
            </Head>
            <Drawer>{children}</Drawer>
        </main>
    );
}
