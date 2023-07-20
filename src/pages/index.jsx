import IndexLayout from "./layouts/IndexLayout";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();
    const router = useRouter();
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        console.log(e);
        search && router.push(`/search/${search}`);
    };

    return (
        <IndexLayout title="Home">
            <div className="">
                <h1 className="p-4 text-center text-2xl font-semibold">
                    {`Bienvenid@ ${session.user?.name} al Fichero Digital`}
                </h1>
            </div>
            <div className="hero md:h-full md:w-1/2 mx-auto">
                <div className="text-center flex flex-col space-y-8 w-full p-4">
                    <input
                        type="number"
                        placeholder="Ingresar DNI del paciente"
                        className="input input-lg input-bordered"
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                        onKeyPress={(e) => {
                            e.key === "Enter" && handleSearch(e);
                        }}
                    />
                    <button
                        onClick={(e) => handleSearch(e)}
                        className="btn btn-lg rounded-full btn-primary"
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </IndexLayout>
    );
}
