import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { SelectItem } from "primereact/selectitem";
import { useTranslation } from "react-i18next";

import { languageConfigs } from "@/locale/languageConfigs";

const cities: SelectItem[] = Object.entries(languageConfigs).map(([code, config]) => ({
    label: config.name,
    value: code,
}));

export const LocaleDropdown: React.FC = () => {
    const { i18n } = useTranslation();
    const handleLocaleChange = (e: DropdownChangeEvent) => {
        i18n.changeLanguage(e.value);
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown
                value={i18n.language}
                onChange={handleLocaleChange}
                options={cities}
                placeholder="Select a Language"
                className="w-full md:w-14rem"
            />
        </div>
    );
};
