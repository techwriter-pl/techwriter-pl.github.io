import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import Feature, { FeatureProps } from "../components/Feature/Feature";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div>
          <img src="/img/logo-wide.png" alt={siteConfig.title} />
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="margin-bottom--lg">
          <img src="/img/Coffee.svg" alt="" />
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/blog">
            Czytaj artykuły
          </Link>
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

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row">
            {features.map((feature) => (
              <div className="col col--6" key={feature.title}>
                <Feature {...feature} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
