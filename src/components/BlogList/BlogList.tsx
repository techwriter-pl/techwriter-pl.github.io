import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogListPage from '@theme/BlogListPage';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import CoverImage from '../CoverImage/CoverImage';
import HomePageHeader from '../Home/HomePageHeader';
import Partners from '../Partners/Partners';
import SiteHighlights from '../SiteHighlights/SiteHighlights';
import styles from './BlogList.module.css';

export default function BlogHome(props): JSX.Element {
  const { pathname, search } = props.history.location;
  const { siteConfig } = useDocusaurusContext();

  if (pathname.includes('/page/') || search.includes('feed=true')) {
    return <BlogListPage {...props} />;
  }

  return (
    <Layout title="Strona domowa" description={siteConfig.tagline}>
      <HomePageHeader />
      <div className={styles.topWrapper}>
        <div className="container">
          <div style={{ position: 'relative' }}>
            <h2 className={styles.articleListTitle}>Najnowsze artykuły</h2>
          </div>
          <div className={styles.items}>
            {props.items.slice(0, 5).map(({ content: BlogPostContent }) => {
              const { date, permalink, authors } = BlogPostContent.metadata;
              const { title, coverImage, tags } = BlogPostContent.frontMatter;

              return (
                <div key={date} className={clsx(styles.item, 'card')}>
                  <div className={styles.itemLeft}>
                    <Link to={permalink} className={styles.itemTitle}>
                      {title}
                    </Link>
                    <div className={styles.subLine}>
                      {new Date(date).toLocaleDateString('pl', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                      , {authors.map((author) => author.name).join(', ')}
                    </div>
                    <div className={styles.tagList}>
                      {tags.map((tag, tagKey) => (
                        <span key={tagKey} className="badge badge--secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <BlogPostContent />{' '}
                    <Link to={permalink}>...czytaj dalej</Link>
                  </div>
                  <CoverImage permalink={permalink} coverImage={coverImage} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="page/2">
            Więcej artykułów
          </Link>
        </div>
      </div>
      <SiteHighlights />
      <div className="container">
        <Partners />
      </div>
    </Layout>
  );
}
