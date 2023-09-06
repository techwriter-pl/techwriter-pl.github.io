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
  console.log(props)

  if (pathname.includes("/page/") || search.includes("feed=true")) {
    return <BlogListPage {...props} />;
  }

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      wrapperClassName={styles.pageWrapper}
    >
      <HomePageHeader />
      <div className={styles.topWrapper}>
        <div className="container">
          <h2 className={styles.articleListTitle}>Najnowsze artykuły</h2>
          <div className={styles.items}>
            {props.items.slice(0, 3).map(({ content }) => {
              const { date, permalink } = content.metadata;
              const { title, coverImage, tags } = content.frontMatter;
              const coverImagePath = `/img/cover/${coverImage}`;
              return (
                <Link
                  to={permalink}
                  key={date}
                  className={clsx(styles.item, "card")}
                >
                  <div className={styles.itemLeft}>
                    <div className={styles.itemTitle}>{title}</div>
                    <div>{new Date(date).toLocaleDateString('pl', { year:"numeric", month:"short", day:"numeric"})}</div>
                    <div className={styles.tagList}>{tags.map((tag, tagKey) => <span key={tagKey} className="badge badge--secondary">{tag}</span>)}</div>
                  </div>
                  <img
                    alt=""
                    src={coverImagePath}
                    className={styles.itemImage}
                  />
                </Link>
              );
            })}
          </div>
        </div>
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
