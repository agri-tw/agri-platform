import { Stack } from "@mantine/core";

import { AdvisorInputSection } from "./advisorInputSection";
import { AdvisorOutputSection } from "./advisorOutputSection";

export const AdvisorSections: React.FC = () => {
    return (
        <Stack style={{ width: "100%" }}>
            <AdvisorInputSection />
            <AdvisorOutputSection />
        </Stack>
    );
};
