import { useTranslation } from "react-i18next";

import { Chip } from "@mantine/core";

export const Home: React.FC = () => {
    const { t } = useTranslation();
    return <Chip>{t("helloWorld", { ns: ["common"] })}</Chip>;
};
