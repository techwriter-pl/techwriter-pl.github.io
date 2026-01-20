import Link from '@docusaurus/Link';
import OriginalBlogPostItems from '@theme-original/BlogPostItems';
import Tag from '@theme/Tag';
import styles from './BlogPostItems.module.css';

type PopularFilterProps = {
  label: string;
  permalink: string;
  description: string;
};

const popularFilters: PopularFilterProps[] = [
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
          <b>Popularne tagi:</b>
          {popularFilters.map((filter, idx) => (
            <Tag {...filter} key={idx} />
          ))}
          <Link to="/tags">...wyświetl więcej tagów</Link>
        </div>
        <div></div>
      </div>
      <OriginalBlogPostItems {...props} />
    </div>
  );
}
