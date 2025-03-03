import Link from '@docusaurus/Link';
import { Props } from '@theme/BlogListPage';
import Layout from '@theme/Layout';
import CoverImage from '../CoverImage/CoverImage';
import ComingSoonBadge from './ComingSoonBadge';

function isDateInFuture(dateString: string): boolean {
  const inputDate = new Date(dateString);

  if (isNaN(inputDate.getTime())) {
    throw new Error('Invalid date format');
  }

  const currentDate = new Date();
  return inputDate > currentDate;
}

export default function ({ items }: Props) {
  return (
    <Layout title="wydarzenia">
      <div className="container padding-top--xl">
        <div className="row">
          <div className="col">
            <h1>Wydarzenia</h1>
            {items.map(({ content: BlogPostContent }, key) => {
              const { permalink, title, date } = BlogPostContent.metadata;
              const { coverImage } = BlogPostContent.frontMatter as any;
              const isUpcoming = isDateInFuture(date);

              return (
                <div key={key} className="row margin-bottom--xl">
                  <div
                    className="col margin-bottom--lg"
                    style={{ position: 'relative' }}
                  >
                    {isUpcoming && <ComingSoonBadge />}
                    <CoverImage
                      permalink={permalink}
                      coverImage={coverImage}
                      grayscale={!isUpcoming}
                    />
                  </div>
                  <div className="col">
                    <h2>
                      <Link href={permalink}>{title}</Link>
                    </h2>
                    <div
                      style={{
                        marginBottom: '1rem',
                        fontSize: 14,
                        fontStyle: 'italic',
                      }}
                    >
                      {new Date(date).toLocaleDateString('pl', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    <div>
                      <BlogPostContent />
                      <Link href={permalink} className="button button--primary">
                        Szczegóły
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
