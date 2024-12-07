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
            // backgroundColor: 'var(--ifm-color-primary)',
            backgroundColor: 'black',
            padding: '1rem',
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
