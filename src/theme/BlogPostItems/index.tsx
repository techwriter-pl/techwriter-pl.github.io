import React from 'react';
import OriginalBlogPostItems from '@theme-original/BlogPostItems';
import styles from './BlogPostItems.module.css';
import Tag from '@theme/Tag';
import Link from '@docusaurus/Link';

type PopularFilterProps = {
  label: string;
  permalink: string;
};

const popularFilters: PopularFilterProps[] = [
  { label: 'oferty pracy', permalink: '/tags/oferty-pracy' },
  { label: 'badanie plac', permalink: '/tags/badanie-plac' },
  { label: 'narzedzia', permalink: '/tags/narzedzia' },
  { label: 'konferencje', permalink: '/tags/konferencje' },
];

export default function BlogPostItems(props): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <div className={styles.filterRow}>
          <b>Popularne tematy:</b>
          {popularFilters.map((filter) => (
            <Tag {...filter} key={filter.permalink} />
          ))}
          <Link to="/tags">...wyświetl więcej tematów</Link>
        </div>
        <div></div>
      </div>
      <OriginalBlogPostItems {...props} />
    </div>
  );
}
