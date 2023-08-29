import React from "react";
import OriginalBlogPostFooter from "@theme-original/BlogPostItem/Footer";
import { DiscussionEmbed } from "disqus-react";
import { useBlogPost } from "@docusaurus/theme-common/internal";

export default function Footer() {
  const { metadata } = useBlogPost();
  const { title, date, permalink } = metadata;
  return (
    <>
      <OriginalBlogPostFooter />
      <DiscussionEmbed
        shortname="techwriter-pl"
        config={{
          url: permalink,
          identifier: date,
          title: title,
          language: "pl_PL",
        }}
      />
    </>
  );
}
