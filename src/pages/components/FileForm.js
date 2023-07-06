import React from "react";
import Tabs from "./Tabs";
import TabInput from "./TabInput";

function FileForm() {
    const inputProps = {
        historiaClinica: {
            title: "Historia Clínica",
            color: "border-red-200",
        },
        facturas: {
            title: "Facturas",
            color: "border-green-200",
        },
        remuneracion: {
            title: "Remuneración",
            color: "border-blue-200",
        },
        diagnostico: {
            title: "Diagnóstico por imagen",
            color: "border-yellow-200",
        },
        otros: {
            title: "Otros",
            color: "border-purple-200",
        },
    };

    const tabInputs = Object.keys(inputProps).map((key) => (
        <TabInput
            key={key}
            title={inputProps[key].title}
            color={inputProps[key].color}
        />
    ));

    return (
        <form className="mx-auto p-8 rounded-box shadow-xl shadow-gray-200">
            <div className="form-group grid gap-8">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Nombre</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="input input-bordered"
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
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Cod. de factura</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Cod. de factura"
                        className="input input-bordered"
                    />
                </div>
                <Tabs
                    tabs={Object.keys(inputProps).map((key) => ({
                        title: inputProps[key].title,
                        color: inputProps[key].color,
                    }))}
                    tabInputs={tabInputs}
                />
            </div>
        </form>
    );
}

export default FileForm;
