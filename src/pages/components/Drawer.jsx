import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useState } from "react";

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
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

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
                    <div className=" px-2 mx-2">
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
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href}>
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        onClick={() => {
                            setIsLoading(true);
                            signOut();
                        }}
                        className="btn btn-sm btn-primary"
                    >
                        {isLoading ? (
                            <div className="loading loading-spinner loading-sm"></div>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-56 h-full bg-base-200 rounded-r-box">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>
                                <span>{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Drawer;
