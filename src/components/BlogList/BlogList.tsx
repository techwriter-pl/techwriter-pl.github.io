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
    return <BlogListPage {...props} />;
  }

  return (
    <Layout title="Strona domowa" description={siteConfig.tagline}>
      <HomePageHeader />
      <div className={styles.topWrapper}>
        <div className="container">
          <h2 className={styles.articleListTitle}>Najnowsze artykuły</h2>
          <div className={styles.items}>
            {props.items.slice(0, 3).map(({ content: BlogPostContent }) => {
              const { date, permalink, authors } = BlogPostContent.metadata;
              const { title, coverImage, tags } = BlogPostContent.frontMatter;
              const coverImagePath = `/img/cover/${coverImage}`;
              return (
                <div key={date} className={clsx(styles.item, "card")}>
                  <div className={styles.itemLeft}>
                    <Link to={permalink} className={styles.itemTitle}>
                      {title}
                    </Link>
                    <div className={styles.subLine}>
                      {new Date(date).toLocaleDateString("pl", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                      , {authors.map((author) => author.name).join(", ")}
                    </div>
                    <div className={styles.tagList}>
                      {tags.map((tag, tagKey) => (
                        <span key={tagKey} className="badge badge--secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <BlogPostContent />{" "}
                    <Link to={permalink}>...czytaj dalej</Link>
                  </div>
                  <Link to={permalink} className={styles.imageContainer}>
                    <img
                      alt=""
                      src={coverImagePath}
                      className={styles.itemImage}
                    />
                  </Link>
                </div>
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
