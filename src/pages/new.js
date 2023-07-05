import FileForm from "./components/Form";
import Section from "./components/Section";
import IndexLayout from "./layouts/indexLayout";

export default function New() {
    return (
        <IndexLayout title="New">
            <Section>
                <FileForm />
            </Section>
        </IndexLayout>
    );
}
