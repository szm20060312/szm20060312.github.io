import { getCollection } from 'astro:content';
import { selectPublicEntries } from './content-rules';
import type { Locale } from './i18n';

export async function getProjects(locale?: Locale) {
  const entries = selectPublicEntries(await getCollection('projects'));
  return entries
    .filter((entry) => !locale || entry.data.locale === locale)
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getWriting(locale?: Locale) {
  const entries = selectPublicEntries(await getCollection('writing'));
  return entries
    .filter((entry) => !locale || entry.data.locale === locale)
    .sort((a, b) => (b.data.date ?? '').localeCompare(a.data.date ?? '') || a.data.slug.localeCompare(b.data.slug));
}
