import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import IndexLayout from "../layouts/indexLayout";
export default function SearchFile() {
    const [files, setFiles] = useState([]);
    const { dni } = useRouter().query;

    useEffect(() => {
        axios
            .get(`/api/file?dni=${dni}`)
            .then(({ data }) => {
                setFiles(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [dni]);

    return (
        <IndexLayout title="Busqueda">
            <div className="container mx-auto mt-8 space-y-8">
                <h1 className="text-center text-2xl md:text-4xl font-bold">
                    Resultados de la busqueda
                </h1>
                <div className="grid md:grid-cols-2 place-items-center gap-4">
                    {files?.length > 0 ? (
                        files.map((file) => (
                            <Link key={file._id} href={`/file/${file._id}`}>
                                <span className="btn btn-primary btn-lg">
                                    {file._id}
                                </span>
                            </Link>
                        ))
                    ) : (
                        <div className="flex flex-col space-y-4">
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
