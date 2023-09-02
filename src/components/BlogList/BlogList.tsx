import Layout from "@theme/Layout";
import React from "react";
import HomePageHeader from "../Home/HomePageHeader";
import Link from "@docusaurus/Link";
import styles from "./BlogList.module.css";
import BlogListPage from "@theme/BlogListPage";
import Partners from "../Partners/Partners";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";

export default function BlogHome(props): JSX.Element {
  const { pathname, search } = props.history.location;
  const { siteConfig } = useDocusaurusContext();

  if (pathname.includes("/page/") || search.includes("feed=true")) {
    console.log("Condition met");
    return <BlogListPage {...props} />;
  }

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      wrapperClassName={styles.pageWrapper}
    >
      <div className={styles.topWrapper}>
        <div className={styles.heroWrapper}>
          <HomePageHeader />
        </div>
        <div className="container">
          <div className={styles.items}>
            {props.items.slice(0, 3).map(({ content }) => {
              const { date, permalink } = content.metadata;
              const { title, coverImage } = content.frontMatter;
              const coverImagePath = `/img/cover/${coverImage}`;
              return (
                <Link
                  to={permalink}
                  key={date}
                  className={clsx(styles.item, "card")}
                >
                  <img
                    alt=""
                    src={coverImagePath}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemTitle}>{title}</div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.backdrop} />
      </div>
      <div className="container">
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="page/2">
            Więcej artykułów
          </Link>
        </div>
      </div>
      <div className="container">
        <Partners />
      </div>
    </Layout>
  );
}
