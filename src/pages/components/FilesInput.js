import { useState } from "react";
export default function FilesInput({ title, onStateChange }) {
    const [files, setFiles] = useState([]);

    const handleInputChange = (e) => {
        setFiles([...files, ...e.target.files]);
        onStateChange([...files, ...e.target.files]);
    };

    return (
        <div className={"form-control"}>
            <label className="label">
                <span className="label-text">{title}</span>
            </label>
            <input
                type="file"
                className="file-input input-bordered border-2 w-full"
                multiple
                onChange={(e) => handleInputChange(e)}
            />
        </div>
    );
}
