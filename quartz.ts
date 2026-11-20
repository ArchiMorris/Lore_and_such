import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

import * as ExternalPlugin from "./.quartz/plugins"

// Сортировка страниц папки: числа сравниваются как числа (1, 2, 10, 11)
ExternalPlugin.FolderPage({
  sort: (f1, f2) =>
    (f1.frontmatter?.title ?? "").localeCompare(f2.frontmatter?.title ?? "", undefined, {
      numeric: true,
      sensitivity: "base",
    }),
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
