import IndexLayout from "./layouts/indexLayout";
import dbConnect from "../lib/dbConnect";

export default function Home() {
    dbConnect();
    return (
        <IndexLayout title="Home">
            <div className="hero min-h-screen md:w-1/2 mx-auto">
                <div className="text-center flex flex-col gap-8 w-full p-4">
                    <input
                        type="text"
                        placeholder="Ingrese para buscar..."
                        className="input input-lg input-bordered"
                        autoFocus
                    />
                    <button className="btn btn-lg btn-primary">Buscar</button>
                </div>
            </div>
        </IndexLayout>
    );
}