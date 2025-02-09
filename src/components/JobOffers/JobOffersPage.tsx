import Link from '@docusaurus/Link';
import { jobOffers } from './job-offer-list';
import { JobOffer } from './JobOffer';
import { Fragment } from 'react';

export function JobOffersPage() {
  return (
    <div className="container">
      <section className="margin-top--xl margin-bottom--lg">
        <h1>Oferty pracy</h1>
        <p>
          Poniżej znajdziecie aktualne oferty pracy w branży komunikacji
          technicznej.
        </p>
        <p>
          Chcesz umieścić tutaj swoje ogłoszenie? Więcej informacji znajdziesz w{' '}
          <Link href="/kontakt#publikacja-ofert-pracy">
            sekcji o publikacji ofert pracy.
          </Link>
        </p>
      </section>
      <hr />
      {jobOffers.map((jobOfferProps, idx) => (
        <Fragment key={idx}>
          <JobOffer {...jobOfferProps} />
          <hr />
        </Fragment>
      ))}
    </div>
  );
}
