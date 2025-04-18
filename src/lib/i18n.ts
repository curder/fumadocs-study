import { I18nProviderProps } from "fumadocs-ui/i18n";

type Translations = Omit<I18nProviderProps, "children">;
export const i18n: Translations = {
  locale: "zh_CN",
  translations: {
    toc: "目录",
    search: "搜索文档",
    lastUpdate: "最后更新于",
    searchNoResult: "搜索无结果",
    previousPage: "上一页",
    nextPage: "下一页",
    chooseLanguage: "选择语言",
  },
};

export default i18n;
