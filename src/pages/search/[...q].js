import { useRouter } from 'next/router';
export default function SearchFile() {
    const {q} = useRouter().query;
    const query = (q || []).join(' ');
    return (
        <div>
            <h1>{query}</h1>
        </div>
    );
}