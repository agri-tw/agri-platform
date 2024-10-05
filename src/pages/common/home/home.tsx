import { Chip } from "primereact/chip";
import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
    const { t } = useTranslation();
    return <Chip label={t("helloWorld", { ns: ["common"] })} icon="pi pi-check" />;
};
