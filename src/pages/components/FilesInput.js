import { useState, useEffect } from "react";
import axios from "axios";
export default function FilesInput({ title, onLinksChange }) {
    const [links, setLinks] = useState([]);
    const uploadFiles = async (e) => {
        const files = e.target.files;

        if (files?.length > 0) {
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append("file", files[i]);
            }
            await axios
                .post("/api/files/upload", formData)
                .then((res) => {
                    setLinks((links) => [...links, ...res?.data.links]);
                    onLinksChange([...links, ...res?.data.links]);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
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
                onChange={uploadFiles}
            />
            <div className="flex flex-wrap gap-2 py-2">
                {links.map((link, index) => (
                    <table className="table" key={index}>
                        <tbody>
                            <tr>
                                <td className="w-full">
                                    <span className="italic text-gray-500">
                                        {link.substring(link.length - 30)}
                                    </span>
                                </td>
                                <td>
                                    <button className="btn text-[10px] btn-xs md:btn-sm btn-primary rounded-full">
                                        <a href={link} target="_blank">
                                            Ver
                                        </a>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ))}
            </div>
        </div>
    );
}
