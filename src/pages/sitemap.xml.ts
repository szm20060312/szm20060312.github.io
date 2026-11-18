import type { APIRoute } from 'astro';
import { getProjects, getWriting } from '../lib/content';
import { pathFor } from '../lib/i18n';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('http://localhost:4321');
  const pairs: Array<{ en: string; zh: string }> = [];

  for (const route of ['', 'research', 'projects', 'about', 'coursework']) {
    pairs.push({
      en: new URL(pathFor('en', route), base).toString(),
      zh: new URL(pathFor('zh', route), base).toString(),
    });
  }

  const projectsEn = await getProjects('en');
  const projectsZh = await getProjects('zh');
  for (const enEntry of projectsEn) {
    const zhEntry = projectsZh.find((other) => other.data.translationKey === enEntry.data.translationKey);
    if (!zhEntry) continue;
    pairs.push({
      en: new URL(pathFor('en', `projects/${enEntry.data.slug}`), base).toString(),
      zh: new URL(pathFor('zh', `projects/${zhEntry.data.slug}`), base).toString(),
    });
  }

  const writingEn = await getWriting('en');
  const writingZh = await getWriting('zh');
  if (writingEn.length > 0 && writingZh.length > 0) {
    pairs.push({
      en: new URL(pathFor('en', 'writing'), base).toString(),
      zh: new URL(pathFor('zh', 'writing'), base).toString(),
    });
    for (const enArticle of writingEn) {
      const zhArticle = writingZh.find((other) => other.data.translationKey === enArticle.data.translationKey);
      if (!zhArticle) continue;
      pairs.push({
        en: new URL(pathFor('en', `writing/${enArticle.data.slug}`), base).toString(),
        zh: new URL(pathFor('zh', `writing/${zhArticle.data.slug}`), base).toString(),
      });
    }
  }

  const entries = pairs.flatMap(({ en, zh }) => [en, zh].map((loc) => [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(en)}" />`,
    `    <xhtml:link rel="alternate" hreflang="zh-CN" href="${escapeXml(zh)}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(en)}" />`,
    '  </url>',
  ].join('\n')));

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
