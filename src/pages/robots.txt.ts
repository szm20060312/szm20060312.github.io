import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('http://localhost:4321');
  const isPublicBuild = !['localhost', '127.0.0.1'].includes(base.hostname);
  const body = isPublicBuild
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', base).toString()}\n`
    : `User-agent: *\nDisallow: /\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
