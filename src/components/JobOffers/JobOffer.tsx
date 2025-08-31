import { JobOfferProps } from './job-offer-list';
import ReactMarkdown from 'react-markdown';
import Link from '@docusaurus/Link';

export function JobOffer({
  title,
  company,
  link,
  location,
  description,
  type,
}: JobOfferProps) {
  return (
    <section className="margin-top--lg margin-bottom--lg">
      <hgroup>
        <h2 className="margin-bottom--sm">{title}</h2>
        <h3 style={{ color: 'var(--ifm-color-gray-700)', fontWeight: 400 }}>
          {company}
        </h3>
      </hgroup>
      <div className="row">
        <div className="col col--7">
          <ReactMarkdown children={description} />
        </div>
        <div className="col col--4 col--offset-1">
          <div>
            <strong>Gdzie:</strong> {location}
          </div>
          <div>
            <strong>Tryb:</strong> {type}
          </div>
          <div className="margin-top--lg">
            <Link href={link} className="button button--primary">
              Szczegóły
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
