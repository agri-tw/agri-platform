import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { faWheatAwn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Combobox, ComboboxOptionProps, Highlight, TextInput, useCombobox } from "@mantine/core";

const crops = [
    "acacia",
    "alfalfa",
    "almond",
    "anise",
    "apple",
    "apricot",
    "artichoke",
    "asparagus",
    "avocado",
    "banana",
    "barley",
    "bean",
    "beet",
    "bergamot",
    "blackberry",
    "black pepper",
    "blueberry",
    "brazil nut",
    "breadfruit",
    "broccoli",
    "brussels sprouts",
    "buckwheat",
    "cabbage",
    "cacao",
    "cactus",
    "cantaloupe",
    "carrot",
    "cashew",
    "cassava",
    "cauliflower",
    "celery",
    "cherry",
    "chickpea",
    "chili pepper",
    "cinnamon",
    "citrus",
    "coconut",
    "coffee",
    "collard greens",
    "corn",
    "cotton",
    "cucumber",
    "cumin",
    "date",
    "eggplant",
    "endive",
    "fennel",
    "fig",
    "flax",
    "garlic",
    "ginger",
    "grape",
    "grapefruit",
    "guava",
    "hazelnut",
    "hemp",
    "honeydew melon",
    "hop",
    "jalapeño pepper",
    "kale",
    "kiwi",
    "kohlrabi",
    "lentil",
    "lettuce",
    "lime",
    "lemon",
    "lychee",
    "mango",
    "maple",
    "millet",
    "mint",
    "mushroom",
    "mustard",
    "oat",
    "olive",
    "onion",
    "orange",
    "papaya",
    "peach",
    "peanut",
    "pear",
    "pecan",
    "pepper",
    "pineapple",
    "pistachio",
    "plum",
    "pomegranate",
    "potato",
    "pumpkin",
    "quinoa",
    "radish",
    "raspberry",
    "rice",
    "rose",
    "rosemary",
    "rye",
    "saffron",
    "sage",
    "sassafras",
    "sesame",
    "shallot",
    "spinach",
    "squash",
    "strawberry",
    "sugarcane",
    "sunflower",
    "sweet potato",
    "tea",
    "thyme",
    "tomato",
    "turnip",
    "vanilla",
    "walnut",
    "watermelon",
    "wheat",
    "yam",
];

interface CropOptionProps {
    name: string;
    highlight: string;
}

const CropOption: React.FC<CropOptionProps> = (props) => {
    return (
        <Combobox.Option value={props.name} key={props.name}>
            <Highlight highlight={props.highlight} size="sm">
                {props.name}
            </Highlight>
        </Combobox.Option>
    );
};

interface CropSelectionProps {
    onSelectCrop: (crop: string) => void;
}

export const CropSelection: React.FC<CropSelectionProps> = (props) => {
    const [search, setSearch] = useState("");
    const { t } = useTranslation();
    const combobox = useCombobox({
        onDropdownClose: () => {
            combobox.resetSelectedOption();
        },
        onDropdownOpen: () => {
            combobox.focusTarget();
        },
    });

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        combobox.openDropdown();
        combobox.updateSelectedOptionIndex();
        setSearch(event.currentTarget.value);
    };

    const handleSubmit = (value: string, _optionProps: ComboboxOptionProps) => {
        setSearch(value);
        combobox.closeDropdown();
        props.onSelectCrop(value);
    };

    const filteredCrops = useMemo(() => {
        const localeCrops = crops.map((crop) => t(crop, { ns: "advisor" }));
        const matchedCrops = localeCrops.filter((crop) =>
            crop.toLowerCase().includes((search ?? "").toLowerCase().trim()),
        );
        if (search) {
            return [search, ...matchedCrops.filter((crop) => crop.toLowerCase() !== search.toLowerCase())];
        } else {
            return matchedCrops;
        }
    }, [search, t]);

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={handleSubmit}
            transitionProps={{ duration: 200, transition: "pop-top-left" }}
        >
            <Combobox.Target>
                <TextInput
                    label="Crop"
                    leftSection={<FontAwesomeIcon icon={faWheatAwn} />}
                    placeholder="Select a crop"
                    value={search}
                    onChange={handleSearchChange}
                    onClick={() => combobox.openDropdown()}
                    onFocus={() => combobox.openDropdown()}
                    onBlur={() => combobox.closeDropdown()}
                    style={{ width: "100%" }}
                />
            </Combobox.Target>
            <Combobox.Dropdown>
                <Combobox.Options mah="50vh" style={{ overflowY: "auto" }}>
                    {filteredCrops.map((crop, index) => (
                        <CropOption key={index} name={crop} highlight={search} />
                    ))}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};
