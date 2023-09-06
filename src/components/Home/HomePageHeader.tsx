import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./HomePageHeader.module.css";
import { FeatureProps } from "@site/src/components/Feature/Feature";

export default function HomePageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("container", styles.heroBanner)}>
      <div className={clsx(styles.logoRow)}>
        <img src="/img/Coffee.svg" alt="" className={styles.coffeeImage} />
        <div>
          <img
            src="/img/logo-wide.png"
            alt={siteConfig.title}
            className={styles.logoImage}
          />
          <h1 className={styles.tagline}>{siteConfig.tagline}</h1>
        </div>
      </div>
    </header>
  );
}

const features: FeatureProps[] = [
  {
    title: "Grupa na Facebooku",
    body: (
      <>
        Tech writerzy wymieniający się wiedzą. Dobre miejsce, żeby zadać
        pytanie, albo po prostu utrzymywać kontakt ze społecznością.
      </>
    ),
    link: {
      label: "Dołącz do grupy",
      to: "",
    },
  },
  {
    title: "Partnerzy",
    body: <>Tutaj będą partnerzy...</>,
    link: {
      label: "Zostań partnerem",
      to: "",
    },
  },
];
