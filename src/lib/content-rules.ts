export interface PublishableEntry {
  data: {
    locale: 'en' | 'zh';
    slug: string;
    translationKey: string;
    draft: boolean;
  };
}

// A bilingual entry is published as a pair, so an unfinished translation cannot leak.
export function selectPublicEntries<T extends PublishableEntry>(entries: T[]): T[] {
  const routes = new Set<string>();
  const pairs = new Map<string, Map<string, T>>();

  for (const entry of entries) {
    const { locale, slug, translationKey } = entry.data;
    const route = `${locale}/${slug}`;
    if (routes.has(route)) throw new Error(`Duplicate content route: ${route}`);
    routes.add(route);

    const translations = pairs.get(translationKey) ?? new Map<string, T>();
    if (translations.has(locale)) {
      throw new Error(`Duplicate translation: ${translationKey}/${locale}`);
    }
    translations.set(locale, entry);
    pairs.set(translationKey, translations);
  }

  const published = new Set<T>();
  for (const [key, translations] of pairs) {
    const items = [...translations.values()];
    if (items.every((entry) => entry.data.draft)) continue;
    if (!translations.has('en') || !translations.has('zh')) {
      throw new Error(`Missing English or Chinese translation: ${key}`);
    }
    if (items.some((entry) => entry.data.draft)) continue;
    for (const entry of items) published.add(entry);
  }
  return entries.filter((entry) => published.has(entry));
}
