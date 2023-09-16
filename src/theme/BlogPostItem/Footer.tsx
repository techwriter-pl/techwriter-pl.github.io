import React from 'react';
import OriginalBlogPostFooter from '@theme-original/BlogPostItem/Footer';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import DisqusEmbed from '@site/src/components/DisqusEmbed';

export default function Footer() {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { title, date, permalink } = metadata;

  return (
    <>
      <OriginalBlogPostFooter />
      {isBlogPostPage && (
        <DisqusEmbed title={title} id={date} relativeUrl={permalink} />
      )}
    </>
  );
}
