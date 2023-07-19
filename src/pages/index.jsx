import IndexLayout from "./layouts/IndexLayout";
import { useState } from "react";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        console.log(e)
        search && router.push(`/search/${search}`);
    };

    return (
        <IndexLayout title="Home">
            <div className="hero md:h-screen md:w-1/2 mx-auto">
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
