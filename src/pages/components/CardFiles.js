import Link from "next/link";

export default function CardFiles({ files }) {
    return (
        <div className="grid md:grid-cols-4 gap-4 p-4 items-start">
            {files.map((file) => (
                <div className="p-4" key={file.id}>
                    <div className="flex flex-col gap-2 p-4 text-left rounded-box border-4 border-gray-300">
                        <h3 className="text-xl">{file.type}</h3>
                        {file.files.map((f) => (
                            <Link
                                key={f}
                                href={f}
                                className="badge badge-primary"
                                target="_blank"
                            >
                                {f.substring(f.length - 20)}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
