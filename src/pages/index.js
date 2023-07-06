import { useState } from "react";
import IndexLayout from "./layouts/indexLayout";

export default function Home() {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        search && window.location.replace(`/search/${search}`);
    };

    return (
        <IndexLayout title="Home">
            <div className="hero md:h-screen md:w-1/2 mx-auto">
                <div className="text-center flex flex-col space-y-8 w-full p-4">
                    <input
                        type="text"
                        placeholder="Ingrese para buscar..."
                        className="input input-lg input-bordered"
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                    />
                    <button
                        onClick={(e) => handleSearch(e)}
                        className="btn btn-lg btn-primary"
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </IndexLayout>
    );
}
