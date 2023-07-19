import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

const links = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/new",
        label: "Nuevo fichero",
    },
];

function Drawer({ children }) {
    const { data: session } = useSession({ required: true });
    const router = useRouter();

    const isLoginPage = router.pathname === "/login";

    return (
        <div className="drawer h-screen">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-200">
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-3"
                            className="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <Link href={"/"} className="btn btn-ghost font-normal">
                            <Image
                                width={40}
                                height={40}
                                src="/logo-original.png"
                                alt="logo"
                            />
                            | Fichero Digital
                        </Link>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {!isLoginPage &&
                                links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href}>
                                            <span>{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                        {session && (
                            <button
                                onClick={() => signOut()}
                                className="btn btn-sm btn-primary"
                            >
                                Cerrar sesión
                            </button>
                        )}
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-56 h-full bg-base-200 rounded-r-box">
                    {!isLoginPage &&
                        links.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>
                                    <span>{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    {session && (
                        <button
                            onClick={() => signOut()}
                            className="btn btn-sm btn-primary"
                        >
                            Cerrar sesión
                        </button>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Drawer;
