import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Partners.module.css";

type PartnerProps = {
  label: string;
  link: string;
  imageSrc: string;
};

const partners: PartnerProps[] = [
  {
    label: "ITCQF - link do strony",
    link: "https://itcqf.org/",
    imageSrc: require("./img/itcqf.png").default,
  },
  {
    label: "Komunikacja techniczna - link do strony Vistula",
    link: "https://www.vistula.edu.pl/kierunki-studiow/kontynuacja-edukacji/studia-podyplomowe/informatyka/komunikacja-techniczna",
    imageSrc: require("./img/vistula_logo.jpg").default,
  },
  {
    label: "Accens - link do strony",
    link: "https://accens.io/",
    imageSrc: require("./img/logo-accens.png").default,
  },
  {
    label: "4_testers - link do strony",
    link: "https://www.4testers.pl/",
    imageSrc: require("./img/4_testers_logo.png").default,
  },
];

const mediaPartners: PartnerProps[] = [
  {
    label: "Strona konferencji soap!",
    link: "http://soapconf.com/",
    imageSrc: require("./img/soap_conf_logo_2019_150px.png").default,
  },
  {
    label: "MeetContent Facebook fan page",
    link: "https://www.facebook.com/meetcontentcommunity/",
    imageSrc: require("./img/MeetContent_logo_blue-e1680790803920.png").default,
  },
  {
    label: "MadCap Central",
    link: "https://www.madcapsoftware.com/madcap-central-2023/?utm_source=techwriterpl&utm_medium=banner&utm_campaign=madcap-software",
    imageSrc: require("./img/MadCap-Central-Banner-2023-e1685527700878.png")
      .default,
  },
  {
    label: "MadCap Central Support",
    link: "https://www.madcapsoftware.com/products/central/?utm_source=techwriterpl&utm_medium=banner&utm_campaign=central2022",
    imageSrc:
      require("./img/MadCap-Software-Release-Banner-2023-e1685527677456.png")
        .default,
  },
  {
    label: "MadCap Flare",
    link: "https://www.madcapsoftware.com/products/flare/?utm_source=techwriterpl&utm_medium=banner&utm_campaign=central2022",
    imageSrc: require("./img/MadCap-Flare-Banner-2023-e1685527717692.png")
      .default,
  },
  {
    label: "MadCap Free Trial",
    link: "https://www.madcapsoftware.com/free-trials/?utm_source=techwriterpl&utm_medium=banner&utm_campaign=madcap-software",
    imageSrc:
      require("./img/MadCap-Software-Trial-Banner-2023-e1685527735174.png")
        .default,
  },
  {
    label: "Strona KTLC2022",
    link: "https://www.twguild.cz/",
    imageSrc: require("./img/tw-guild.png").default,
  },
];

function Partner({ label, link, imageSrc }: PartnerProps) {
  return (
    <Link href={link} title={label} className={styles.partner}>
      <img src={imageSrc} alt="" />
    </Link>
  );
}

type PartnerSectionProps = {
  title: string;
  items: PartnerProps[];
};

function PartnerSection({ items, title }: PartnerSectionProps) {
  return (
    <section className={styles.section}>
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
    <div>
      <PartnerSection title="Nasi partnerzy" items={partners} />
      <PartnerSection title="Patronat medialny" items={mediaPartners} />
    </div>
  );
}
