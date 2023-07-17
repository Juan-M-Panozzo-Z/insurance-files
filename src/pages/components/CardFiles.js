import Link from "next/link";

export default function CardFiles({ files }) {
    return (
        <div className="grid md:grid-cols-4 gap-4 p-4  justify-items-center">
            {files?.map((file) => (
                    <div key={file.id} className="card w-full bg-neutral-600 text-neutral-content ">
                        <div className="card-body  text-center">
                        <h3 className="card-title pb-1 mb-1 border-b-2">{file.type}</h3>
                        
                        {file?.files.map((f) => (
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
