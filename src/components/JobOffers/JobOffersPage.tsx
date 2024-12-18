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
          Chcesz umieścić tutaj swoją ofertę pracy? Napisz do nas na{' '}
          <Link href="mailto:kontakt@techwriter.pl">kontakt@techwriter.pl</Link>
        </p>
        <p>
          Chcesz pisać dla techwriter.pl? Nie jest to oferta płatnej pracy, ale
          zawsze miło nam gościć kontrybutorów. Więcej szczegółów znajdziesz{' '}
          <Link href="/oferta-wspolpracy-redaktor-techwriter-pl">tutaj</Link>.
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
