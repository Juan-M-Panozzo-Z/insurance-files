import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import IndexLayout from "../layouts/indexLayout";
import CardFiles from "../components/CardFiles";

export default function SearchFile() {
    const [file, setFile] = useState([]);
    const { _id } = useRouter().query;

    useEffect(() => {
        axios
            .get(`/api/file?_id=${_id}`)
            .then(({ data }) => {
                setFile(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [_id]);

    const files = [
        {
            id: 1,
            type: "Historia Clinica",
            files: file.historiaClinica || [],
        },
        {
            id: 2,
            type: "Facturas",
            files: file.facturas || [],
        },
        {
            id: 3,
            type: "Remuneracion",
            files: file.remuneracion || [],
        },
        {
            id: 4,
            type: "Diagnostico por Imagen",
            files: file.diagnosticoImagen || [],
        },
    ];

    return (
        <IndexLayout title="Busqueda">
            {file?.name ? (
                <div className="mt-8">
                    <div className="space-y-4">
                        <h1 className="text-center text-5xl">
                            Nombre: {file.name} {file.lastName}
                        </h1>
                        <h2 className="text-center text-3xl">
                            DNI: {file.dni}
                        </h2>
                    </div>
                    <div className="divider w-1/2 mx-auto"></div>
                    <CardFiles files={files} />
                </div>
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
        </IndexLayout>
    );
}
