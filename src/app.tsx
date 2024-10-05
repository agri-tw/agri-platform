import { PrimeReactProvider } from "primereact/api";
import { Chip } from "primereact/chip";
import { useTranslation } from "react-i18next";

export const App: React.FC = () => {
    const { t } = useTranslation();
    return (
        <PrimeReactProvider>
            <Chip label={t("helloWorld", { ns: ["common"] })} icon="pi pi-check" />
        </PrimeReactProvider>
    );
};
