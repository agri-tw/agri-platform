import resources_enus_advisor from "./en-us/advisor.json";
import resources_enus_common from "./en-us/common.json";
import resources_enus_home from "./en-us/home.json";
import resources_jajp_advisor from "./ja-jp/advisor.json";
import resources_jajp_common from "./ja-jp/common.json";
import resources_jajp_home from "./ja-jp/home.json";
import resources_kokr_advisor from "./ko-kr/advisor.json";
import resources_kokr_common from "./ko-kr/common.json";
import resources_kokr_home from "./ko-kr/home.json";
import resources_zhtw_advisor from "./zh-tw/advisor.json";
import resources_zhtw_common from "./zh-tw/common.json";
import resources_zhtw_home from "./zh-tw/home.json";

export const languageConfigs = {
    "en-US": {
        name: "English (United States)",
        resources: {
            advisor: resources_enus_advisor,
            common: resources_enus_common,
            home: resources_enus_home,
        },
    },
    "zh-TW": {
        name: "繁體中文（台灣）",
        resources: {
            advisor: resources_zhtw_advisor,
            common: resources_zhtw_common,
            home: resources_zhtw_home,
        },
    },
    "ja-JP": {
        name: "日本語",
        resources: {
            advisor: resources_jajp_advisor,
            common: resources_jajp_common,
            home: resources_jajp_home,
        },
    },
    "ko-KR": {
        name: "한국어",
        resources: {
            advisor: resources_kokr_advisor,
            common: resources_kokr_common,
            home: resources_kokr_home,
        },
    },
};
