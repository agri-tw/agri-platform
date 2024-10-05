import { useMemo, useState } from "react";

import { Combobox, ComboboxOptionProps, Highlight, TextInput, useCombobox } from "@mantine/core";

const crops = [
    "Acacia",
    "Alfalfa",
    "Almond",
    "Anise",
    "Apple",
    "Apricot",
    "Artichoke",
    "Asparagus",
    "Avocado",
    "Banana",
    "Barley",
    "Bean",
    "Beet",
    "Bergamot",
    "Blackberry",
    "Black pepper",
    "Blueberry",
    "Brazil nut",
    "Breadfruit",
    "Broccoli",
    "Brussels sprouts",
    "Buckwheat",
    "Cabbage",
    "Cacao",
    "Cactus",
    "Cantaloupe",
    "Carrot",
    "Cashew",
    "Cassava",
    "Cauliflower",
    "Celery",
    "Cherry",
    "Chickpea",
    "Chili pepper",
    "Cinnamon",
    "Citrus",
    "Coconut",
    "Coffee",
    "Collard greens",
    "Corn",
    "Cotton",
    "Cucumber",
    "Cumin",
    "Date",
    "Eggplant",
    "Endive",
    "Fennel",
    "Fig",
    "Flax",
    "Garlic",
    "Ginger",
    "Grape",
    "Grapefruit",
    "Guava",
    "Hazelnut",
    "Hemp",
    "Honeydew melon",
    "Hop",
    "Jalapeño pepper",
    "Kale",
    "Kiwi",
    "Kohlrabi",
    "Lentil",
    "Lettuce",
    "Lime",
    "Lemon",
    "Lychee",
    "Mango",
    "Maple",
    "Millet",
    "Mint",
    "Mushroom",
    "Mustard",
    "Oat",
    "Olive",
    "Onion",
    "Orange",
    "Papaya",
    "Peach",
    "Peanut",
    "Pear",
    "Pecan",
    "Pepper",
    "Pineapple",
    "Pistachio",
    "Plum",
    "Pomegranate",
    "Potato",
    "Pumpkin",
    "Quinoa",
    "Radish",
    "Raspberry",
    "Rice",
    "Rose",
    "Rosemary",
    "Rye",
    "Saffron",
    "Sage",
    "Sassafras",
    "Sesame",
    "Shallot",
    "Spinach",
    "Squash",
    "Strawberry",
    "Sugarcane",
    "Sunflower",
    "Sweet potato",
    "Tea",
    "Thyme",
    "Tomato",
    "Turnip",
    "Vanilla",
    "Walnut",
    "Watermelon",
    "Wheat",
    "Yam",
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
    const combobox = useCombobox({
        onDropdownClose: () => {
            combobox.resetSelectedOption();
            combobox.focusTarget();
        },
        onDropdownOpen: () => {
            combobox.focusSearchInput();
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
        const matchedCrops = crops.filter((crop) => crop.toLowerCase().includes((search ?? "").toLowerCase().trim()));
        return search ? [...new Set([search, ...matchedCrops])] : matchedCrops;
    }, [search]);

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={handleSubmit}
            transitionProps={{ duration: 200, transition: "pop-top-left" }}
        >
            <Combobox.Target>
                <TextInput
                    label="Crop"
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
                <Combobox.Options>
                    {filteredCrops.map((crop) => (
                        <CropOption key={crop} name={crop} highlight={search} />
                    ))}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};
