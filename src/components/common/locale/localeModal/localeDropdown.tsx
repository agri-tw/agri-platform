import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Combobox, ComboboxOptionProps, InputBase, useCombobox } from "@mantine/core";

import { languageConfigs } from "@/locale/languageConfigs";

interface LocaleOptionProps {
    code: keyof typeof languageConfigs;
}

const LocaleOption: React.FC<LocaleOptionProps> = (props) => {
    return (
        <Combobox.Option value={props.code} key={props.code}>
            {languageConfigs[props.code].name}
        </Combobox.Option>
    );
};

const languageCodes = Object.keys(languageConfigs) as (keyof typeof languageConfigs)[];

export const LocaleDropdown: React.FC = () => {
    const { i18n } = useTranslation();
    const [search, setSearch] = useState("");
    const combobox = useCombobox({
        onDropdownClose: () => {
            combobox.resetSelectedOption();
            combobox.focusTarget();
            setSearch("");
        },
        onDropdownOpen: () => {
            combobox.focusSearchInput();
        },
    });

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value);
    };

    const handleLocaleChange = (value: string, _optionProps: ComboboxOptionProps) => {
        i18n.changeLanguage(value);
        setSearch(value);
        combobox.closeDropdown();
    };

    const filteredLanguageCodes = useMemo(() => {
        return languageCodes.filter((code) => {
            const language = languageConfigs[code];
            return language.name.toLowerCase().includes(search.toLowerCase().trim());
        });
    }, [search]);

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={handleLocaleChange}
            transitionProps={{ duration: 200, transition: "pop" }}
        >
            <Combobox.Target>
                <InputBase
                    component="button"
                    type="button"
                    pointer
                    rightSection={<Combobox.Chevron />}
                    rightSectionPointerEvents="none"
                    onClick={() => combobox.toggleDropdown()}
                >
                    {languageConfigs[i18n.language as keyof typeof languageConfigs].name}
                </InputBase>
            </Combobox.Target>
            <Combobox.Dropdown>
                <Combobox.Search value={search} onChange={handleSearchChange} placeholder="Search languages" />
                <Combobox.Options>
                    {filteredLanguageCodes.map((code) => (
                        <LocaleOption key={code} code={code} />
                    ))}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};
