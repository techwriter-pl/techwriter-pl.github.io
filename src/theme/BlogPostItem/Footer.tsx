import React from 'react';
import OriginalBlogPostFooter from '@theme-original/BlogPostItem/Footer';
import DisqusEmbed from '@site/src/components/DisqusEmbed';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client'

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
