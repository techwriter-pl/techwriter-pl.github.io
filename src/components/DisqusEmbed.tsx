import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DiscussionEmbed } from 'disqus-react';

type DisqusEmbedProps = {
  relativeUrl: string;
  id: string;
  title: string;
};

export default function DisqusEmbed({
  relativeUrl,
  id,
  title,
}: DisqusEmbedProps) {
  const { siteConfig } = useDocusaurusContext();
  const { url } = siteConfig;

  return (
    <div className="margin-top--lg margin-bottom--lg">
      <DiscussionEmbed
        shortname="techwriter-pl"
        config={{
          url: `${url}${relativeUrl}`,
          identifier: id,
          title: title,
          language: 'pl',
        }}
      />
    </div>
  );
}
