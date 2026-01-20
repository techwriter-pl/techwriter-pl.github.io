import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './Feature.module.css';

export type FeatureProps = {
  title: string;
  body: JSX.Element;
  link: {
    label: string;
    to: string;
  };
};

export default function Feature({
  title,
  body,
  link,
}: FeatureProps): JSX.Element {
  return (
    <div className={clsx('card', styles.featureCard)}>
      <h2>{title}</h2>
      <div>{body}</div>
      <div>
        <Link to={link.to} className="button button--secondary">
          {link.label}
        </Link>
      </div>
    </div>
  );
}
