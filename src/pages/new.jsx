import FileForm from "./components/FileForm";
import Section from "./components/Section";
import IndexLayout from "./layouts/IndexLayout";

export default function New() {
    return (
        <IndexLayout title="New">
            <Section>
                <FileForm />
            </Section>
        </IndexLayout>
    );
}
