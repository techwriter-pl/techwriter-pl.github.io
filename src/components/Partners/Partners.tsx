import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './Partners.module.css';

type PartnerProps = {
  label: string;
  link: string;
  imageSrc: string;
};

export const contentBytesUrl = 'https://contentbytes.pl/';

const partners: PartnerProps[] = [
  {
    label: 'Content Bytes - link do strony',
    link: contentBytesUrl,
    imageSrc: require('./img/content-bytes.png').default,
  },
  {
    label: 'Tech Writer Koduje - link do strony',
    link: 'https://techwriterkoduje.pl/',
    imageSrc: require('./img/Tech-Writer-koduje-logo-2021.png').default,
  },
  {
    label: 'TESTSENSE - link do strony',
    link: 'https://testsense.io/',
    imageSrc: require('./img/testsense.png').default,
  },
  {
    label: 'DREDAR - link do strony',
    link: 'https://dredar.com/',
    imageSrc: require('./img/dredar.png').default,
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
