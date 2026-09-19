import { Helmet } from 'react-helmet-async';
import { buildHeadTags } from '@/seo/head';
import type { PageMeta } from '@/seo/site';

/** Page metadata lives in src/seo/site.ts; pages render <SEO {...PAGES.somePage} />. */
export function SEO(page: PageMeta) {
  return (
    <Helmet>
      <title>{page.title}</title>
      {buildHeadTags(page).map(({ tag: Tag, attrs }) => (
        <Tag key={attrs.name ?? attrs.property ?? attrs.rel} {...attrs} />
      ))}
    </Helmet>
  );
}
