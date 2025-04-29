import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Partners.module.css';
import clsx from 'clsx';

type PartnerProps = {
  label: string;
  link: string;
  imageSrc: string;
};

export const contentBytesUrl =
  'https://www.linkedin.com/company/content-bytes/about/';

const partners: PartnerProps[] = [
  {
    label: 'Content Bytes - link do strony',
    link: contentBytesUrl,
    imageSrc: require('./img/content-bytes.png').default,
  },
  {
    label: 'Komunikacja techniczna - link do strony Vistula',
    link: 'https://www.vistula.edu.pl/kierunki-studiow/kontynuacja-edukacji/studia-podyplomowe/informatyka/komunikacja-techniczna',
    imageSrc: require('./img/vistula_logo.jpg').default,
  },
  {
    label: 'Accens - link do strony',
    link: 'https://accens.io/',
    imageSrc: require('./img/logo-accens.png').default,
  },
  {
    label: '4_testers - link do strony',
    link: 'https://www.4testers.pl/',
    imageSrc: require('./img/4_testers_logo.png').default,
  },
  {
    label: 'Tech Writer Koduje',
    link: 'https://techwriterkoduje.pl/',
    imageSrc: require('./img/Tech-Writer-koduje-logo-2021.png').default,
  },
];

const mediaPartners: PartnerProps[] = [
  {
    label: 'CAKE conf - link do strony',
    link: 'https://cakeconf.contentbytes.pl/',
    imageSrc: require('./img/cake-conf-logo.png').default,
  },
  {
    label: 'Konferencja Tłumaczy - link do strony',
    link: 'https://translation-conference.com/',
    imageSrc: require('./img/KTLC-klocki-kwadratM.png').default,
  },
  {
    label: 'Konferencja Code Europe 2024 - link do strony',
    link: 'https://www.codeeurope.pl/',
    imageSrc: require('./img/code-europe-2024-banner-150px.png').default,
  },
  {
    label: 'MeetContent - link do profilu na Facebooku',
    link: 'https://www.facebook.com/meetcontentcommunity/',
    imageSrc: require('./img/MeetContent_logo_blue-e1680790803920.png').default,
  },
];

function Partner({ label, link, imageSrc }: PartnerProps) {
  return (
    <Link href={link} title={label} className={styles.partner}>
      <img src={imageSrc} alt={label} style={{ maxWidth: 150 }} />
    </Link>
  );
}

type PartnerSectionProps = {
  title: string;
  items: PartnerProps[];
  impact?: boolean;
};

function PartnerSection({ items, title, impact }: PartnerSectionProps) {
  return (
    <section className={clsx(styles.section, impact && styles.impact)}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.partnerList}>
        {items.map((partner) => (
          <Partner {...partner} key={partner.label} />
        ))}
      </div>
    </section>
  );
}

export default function Partners() {
  return (
    <div className={styles.wrapper}>
      <PartnerSection title="Nasi partnerzy" items={partners} impact />
      <PartnerSection title="Patronat medialny" items={mediaPartners} />
    </div>
  );
}
