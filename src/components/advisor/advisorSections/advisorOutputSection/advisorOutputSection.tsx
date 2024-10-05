import { Accordion, Alert } from "@mantine/core";

import { Advice } from "@/models/advisor";

interface AdvisorOutputSectionProps {
    data: Advice | undefined;
    loading: boolean;
    isError: boolean;
    error: string | null;
}

const AccordionItem: React.FC<{ title: string; value: string }> = (props) => (
    <Accordion.Item key={props.title} value={props.title}>
        <Accordion.Control>{props.title}</Accordion.Control>
        <Accordion.Panel>{props.value}</Accordion.Panel>
    </Accordion.Item>
);

export const AdvisorOutputSection: React.FC<AdvisorOutputSectionProps> = (props) => {
    if (props.loading) {
        return <div>Loading...</div>;
    } else if (props.isError) {
        return (
            <Alert variant="light" color="red" title="Error Requesting Advice">
                {props.error}
            </Alert>
        );
    } else if (!props.data) {
        return <div>No Data</div>;
    } else {
        return (
            <Accordion defaultValue="crop_price_management">
                {Object.entries(props.data).map(([key, value]) => (
                    <AccordionItem key={key} title={key} value={value} />
                ))}
            </Accordion>
        );
    }
};
