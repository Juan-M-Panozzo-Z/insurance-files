import React, { useState } from "react";
import FilesInput from "./FilesInput";
import axios from "axios";

function FileForm() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dni, setDni] = useState("");
    const [factura, setFactura] = useState("");
    const [historiaClinica, setHistoriaClinica] = useState([]);
    const [facturas, setFacturas] = useState([]);
    const [remuneracion, setRemuneracion] = useState([]);
    const [diagnosticoImagen, setDiagnosticoImagen] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(historiaClinica)
        historiaClinica.map(hc => {
            formData.append("hc-",hc);
            return null
        })
      
        console.log(formData);
      };

    return (
        <form className="mx-auto p-8 rounded-box ">
            <div className="form-group grid gap-8">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Nombre</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="input input-bordered"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Apellido(s)</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Apellido(s)"
                        className="input input-bordered"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">DNI</span>
                    </label>
                    <input
                        type="number"
                        placeholder="DNI"
                        className="input input-bordered"
                        onChange={(e) => setDni(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Factura</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Factura"
                        className="input input-bordered"
                        onChange={(e) => setFactura(e.target.value)}
                    />
                </div>
                <div className=" grid md:grid-cols-2 gap-4 border border-gray-200 rounded-box p-4">
                    <FilesInput
                        title="Historia clínica"
                        onStateChange={setHistoriaClinica}
                    />
                    <FilesInput
                        title="Factura(s)"
                        onStateChange={setFacturas}
                    />
                    <FilesInput
                        title="Remuneración"
                        onStateChange={setRemuneracion}
                    />
                    <FilesInput
                        title="Diagnóstico por imagen"
                        onStateChange={setDiagnosticoImagen}
                    />
                </div>

                <div className="form-control">
                    <button
                        onClick={handleSubmit}
                        className="btn btn-lg btn-primary"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FileForm;
