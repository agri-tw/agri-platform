import resources_enus_common from "./en-us/common.json";
import resources_zhtw_common from "./zh-tw/common.json";

export const languageConfigs = {
    "en-US": {
        name: "English (United States)",
        resources: {
            common: resources_enus_common,
        },
    },
    "zh-TW": {
        name: "繁體中文（台灣）",
        resources: {
            common: resources_zhtw_common,
        },
    },
};
