export default function FileForm() {
    return (
        <form className="mx-auto max-w-2xl p-8 rounded-box shadow-xl shadow-gray-200">
            <div className="form-group grid gap-4">
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
            </div>
        </form>
    );
}
