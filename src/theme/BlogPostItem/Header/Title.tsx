import Link from '@docusaurus/Link';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import OriginalBlogPostTitle from '@theme-original/BlogPostItem/Header/Title';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Head from '@docusaurus/Head';

export default function Footer() {
  const { frontMatter, metadata } = useBlogPost();
  const { permalink } = metadata;
  const isBrowser = useIsBrowser();

  // @ts-ignore
  const coverImagePath = `/img/cover/${frontMatter.coverImage}`;
  const postLink =
    isBrowser && window.location.pathname !== permalink ? permalink : undefined;

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://techwriter.pl${coverImagePath}`}
        />
      </Head>
      <Link href={postLink}>
        <div
          style={{
            backgroundColor: 'black',
            padding: '4px 1rem',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          <img alt="" src={coverImagePath} />
        </div>
      </Link>
      <OriginalBlogPostTitle />
    </>
  );
}
