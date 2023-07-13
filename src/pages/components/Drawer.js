import Link from "next/link";

const links = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/new",
        label: "Nuevo fichero",
    }
];
function Drawer({ children }) {
    return (
        <div className="drawer">
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
                        <span className="font-bold text-primary">
                            SC&nbsp;
                        </span>
                        | Fichero virtual
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
