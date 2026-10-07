import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { coursework, assertPublicCoursework } from '../src/data/coursework.ts';

assertPublicCoursework(coursework);

const root = path.resolve('dist');
async function list(directory) {
  const items = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(items.map((item) => item.isDirectory() ? list(path.join(directory, item.name)) : path.join(directory, item.name)));
  return nested.flat();
}
const files = await list(root);
const pages = files.filter((file) => file.endsWith('.html'));
const issues = [];
let checkedLinks = 0;

for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(root, file);
  const pathname = `/${relative.replace(/index\.html$/, '').replaceAll(path.sep, '/')}`;
  const language = relative.startsWith(`zh${path.sep}`) ? 'zh-CN' : 'en';
  if (!html.includes(`lang="${language}"`)) issues.push(`${relative}: wrong page language`);
  if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) issues.push(`${relative}: expected one h1`);
  for (const token of ['DRAFT_CONTENT_DO_NOT_PUBLISH', 'draft-template', '/Users/', '实习鉴定表', 'Academic_Record_', '/成绩单/']) {
    if (html.includes(token)) issues.push(`${relative}: private or draft content found (${token})`);
  }
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (/^(?:mailto:|data:|https?:\/\/)/.test(value)) continue;
    const url = new URL(value, `http://localhost${pathname}`);
    const assetPath = path.join(root, decodeURIComponent(url.pathname));
    const target = url.pathname.endsWith('/') ? path.join(assetPath, 'index.html') : assetPath;
    try {
      await access(target);
      if (url.hash && target.endsWith('.html')) {
        const content = target === file ? html : await readFile(target, 'utf8');
        const anchor = decodeURIComponent(url.hash.slice(1));
        if (!content.includes(`id="${anchor}"`)) issues.push(`${relative}: missing anchor ${value}`);
      }
      checkedLinks++;
    } catch {
      issues.push(`${relative}: missing internal resource ${value}`);
    }
  }
}

if (files.some((file) => /Academic_Record_|transcript|成[绩績][单單]/i.test(path.basename(file)))) {
  issues.push('Unexpected original academic record in public build output');
}
for (const relative of ['coursework/index.html', 'zh/coursework/index.html']) {
  const html = await readFile(path.join(root, relative), 'utf8');
  if (/\bGPA\b|\bCGPA\b|\bgrades?\b|績點|绩点|成績|成绩/i.test(html)) {
    issues.push(`${relative}: academic performance fields are not allowed`);
  }
}

if (issues.length) {
  console.error(issues.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Built-site checks passed: ${pages.length} pages, ${checkedLinks} internal links/assets; no draft or local work documents exposed.`);
}
