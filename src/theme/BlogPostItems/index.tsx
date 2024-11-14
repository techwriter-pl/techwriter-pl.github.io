import React from 'react';
import OriginalBlogPostItems from '@theme-original/BlogPostItems';
import styles from './BlogPostItems.module.css';
import Tag from '@theme/Tag';
import Link from '@docusaurus/Link';

type PopularFilterProps = {
  label: string;
  permalink: string;
  description: string;
};

const popularFilters: PopularFilterProps[] = [
  {
    label: 'oferty-pracy',
    permalink: '/tags/oferty-pracy',
    description: 'Ogłoszenia o pracę',
  },
  {
    label: 'badanie-płac',
    permalink: '/tags/badanie-plac',
    description: 'Ankieta o zarobkach w komunikacji technicznej',
  },
  {
    label: 'narzędzia',
    permalink: '/tags/narzedzia',
    description: 'Narzędzia przydatne w pracy technical writera i writerki',
  },
  {
    label: 'konferencje',
    permalink: '/tags/konferencje',
    description: 'Duże wydarzenia branżowe, w których warto uczestniczyć',
  },
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
