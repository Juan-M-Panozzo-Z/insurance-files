import IndexLayout from "./layouts/indexLayout";
import dbConnect from "../lib/dbConnect";

export default function Home() {
    dbConnect();
    return (
            <IndexLayout title="Home">
            index
            </IndexLayout>
    );
}
