import resources_enus_advisor from "./en-us/advisor.json";
import resources_enus_common from "./en-us/common.json";
import resources_zhtw_advisor from "./zh-tw/advisor.json";
import resources_zhtw_common from "./zh-tw/common.json";

export const languageConfigs = {
    "en-US": {
        name: "English (United States)",
        resources: {
            advisor: resources_enus_advisor,
            common: resources_enus_common,
        },
    },
    "zh-TW": {
        name: "繁體中文（台灣）",
        resources: {
            advisor: resources_zhtw_advisor,
            common: resources_zhtw_common,
        },
    },
};
