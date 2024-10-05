import { useTranslation } from "react-i18next";

export const App: React.FC = () => {
    const { t } = useTranslation();
    return <>{t("helloWorld", { ns: ["common"] })}</>;
};
