import { Stack } from "@mantine/core";

import { usePredictMutation } from "@/api/advisor";
import { toDisplayStr } from "@/utils/common";

import { AdvisorInputSection } from "./advisorInputSection";
import { AdvisorOutputSection } from "./advisorOutputSection";

export const AdvisorSections: React.FC = () => {
    const [predict, response] = usePredictMutation();
    return (
        <Stack style={{ width: "100%" }}>
            <AdvisorInputSection predict={predict} />
            <AdvisorOutputSection
                data={response.data}
                loading={response.isLoading}
                isError={response.isError}
                error={toDisplayStr(response.error)}
            />
        </Stack>
    );
};
