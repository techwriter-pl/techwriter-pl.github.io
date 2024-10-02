import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export type AuthorProps = {
  id: string;
  name: string;
  role: string;
  url?: string;
  image_url?: string;
};

export default function AuthorAvatar({
  id,
  name,
  role,
  image_url,
}: AuthorProps) {
  const authorLink = useBaseUrl(`/authors/${id}`);
  return (
    <div className="avatar">
      <Link
        className="avatar__photo-link avatar__photo avatar__photo--lg"
        href={authorLink}
      >
        <img
          alt={`portret redaktora lub redaktorki ${name}, kliknij, żeby zobaczyć wszystkie artykuły redaktora lub redaktorki ${name}`}
          src={image_url || 'https://github.com/techwriter-pl.png'}
        />
      </Link>
      <div className="avatar__intro">
        <Link className="avatar__name" href={authorLink}>
          {name}
        </Link>
        <small className="avatar__subtitle">{role}</small>
      </div>
    </div>
  );
}
