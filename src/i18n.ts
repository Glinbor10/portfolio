import type { Bilingual, Lang } from "./content";

export function t(value: Bilingual, lang: Lang): string {
  return lang === "es" ? value.es : value.en;
}
