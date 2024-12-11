import Link from '@docusaurus/Link';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import OriginalBlogPostTitle from '@theme-original/BlogPostItem/Header/Title';
import useIsBrowser from '@docusaurus/useIsBrowser';

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
      <Link href={postLink}>
        <div
          style={{
            padding: '2rem',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
            backgroundImage: `url(${coverImagePath})`,
            backgroundSize: '2rem',
            backgroundBlendMode: 'multiply',
            backgroundColor: 'var(--ifm-color-primary)',
          }}
        >
          <img alt="" src={coverImagePath} />
        </div>
      </Link>
      <OriginalBlogPostTitle />
    </>
  );
}
