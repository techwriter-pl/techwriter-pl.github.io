import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './CoverImage.module.css';

type CoverImageProps = {
  permalink: string;
  coverImage: string;
  grayscale?: boolean;
};

export default function CoverImage({
  permalink,
  coverImage,
  grayscale,
}: CoverImageProps) {
  const coverImagePath = `/img/cover/${coverImage}`;
  return (
    <Link to={permalink} className={styles.imageContainer}>
      <img
        alt=""
        src={coverImagePath}
        className={clsx(styles.itemImage, grayscale && styles.grayscale)}
      />
    </Link>
  );
}
