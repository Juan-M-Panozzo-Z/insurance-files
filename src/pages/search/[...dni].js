import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import IndexLayout from "../layouts/indexLayout";
export default function SearchFile() {
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { dni } = useRouter().query;

    useEffect(() => {
        axios
            .get(`/api/file?dni=${dni}`)
            .then(({ data }) => {
                setFiles(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, [dni]);

    return (
        <IndexLayout title="Busqueda">
            <div className="container mx-auto mt-8 space-y-8">
                <h1 className="text-center text-2xl md:text-4xl font-bold">
                    Resultados de la busqueda
                </h1>
                <div className="divider w-1/2 mx-auto"></div>
                <div className="grid md:grid-cols-2 place-items-center px-4 gap-4">
                    {isLoading ? (
                        <div className="text-center">Cargando archivos...</div>
                    ) : files?.length > 0 ? (
                        files.map((file) => (
                            <div
                                key={file}
                                className="card w-full bg-neutral-600 text-neutral-content"
                            >
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-2xl capitalize">{`${file.name} ${file.lastName}`}</h2>
                                    <p>
                                        {file.createdAt &&
                                            file.createdAt.split("T")[0]}
                                    </p>
                                    <div className="card-actions justify-end">
                                        <Link href={`/file/${file._id}`}>
                                            <span className="btn btn-primary">
                                                Ver
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-2 flex flex-col space-y-4">
                            <h1 className="text-center">
                                No se encontraron resultados
                            </h1>
                            <button>
                                <Link href="/" className="btn btn-primary">
                                    Volver
                                </Link>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </IndexLayout>
    );
}

{
    /*  */
}
