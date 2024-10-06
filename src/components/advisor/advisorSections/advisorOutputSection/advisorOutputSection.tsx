import { useTranslation } from "react-i18next";

import { Accordion, Alert, Text } from "@mantine/core";

import { Advice } from "@/models/advisor";

interface AdvisorOutputSectionProps {
    data: Advice | undefined;
    loading: boolean;
    isError: boolean;
    error: string | null;
}

const AccordionItem: React.FC<{ title: string; value: string }> = (props) => (
    <Accordion.Item key={props.title} value={props.title}>
        <Accordion.Control>
            <Text fw={600}>{props.title}</Text>
        </Accordion.Control>
        <Accordion.Panel>{props.value}</Accordion.Panel>
    </Accordion.Item>
);

export const AdvisorOutputSection: React.FC<AdvisorOutputSectionProps> = (props) => {
    const { t } = useTranslation();
    if (props.loading) {
        return <div>Loading...</div>;
    } else if (props.isError) {
        return (
            <Alert variant="light" color="red" title="Error Requesting Advice">
                {props.error}
            </Alert>
        );
    } else if (!props.data) {
        return <></>;
    } else {
        return (
            <Accordion defaultValue="crop_price_management">
                {Object.entries(props.data).map(([key, value]) => (
                    <AccordionItem key={key} title={t(key, { ns: "advisor" })} value={value} />
                ))}
            </Accordion>
        );
    }
};
