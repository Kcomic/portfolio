import type { Locale } from "@/i18n/config";
import type { LocaleContent } from "./types";
import { en } from "./en";
import { th } from "./th";

const content: Record<Locale, LocaleContent> = { en, th };

export function getContent(locale: Locale): LocaleContent {
  return content[locale];
}
