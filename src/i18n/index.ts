import "server-only";
import type { Locale } from "./config";
import en from "./dictionaries/en";

/** The canonical dictionary shape is inferred from the English dictionary. */
export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  en: () => import("./dictionaries/en"),
  fr: () => import("./dictionaries/fr"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const load = dictionaries[locale] ?? dictionaries.fr;
  return (await load()).default;
}
