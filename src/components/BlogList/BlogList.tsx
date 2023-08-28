import Layout from "@theme/Layout";
import React from "react";
import HomePageHeader from "../Home/HomePageHeader";
import Link from "@docusaurus/Link";
import styles from "./BlogList.module.css";
import clsx from "clsx";
import BlogListPage from "@theme/BlogListPage";

export default function BlogHome(props): JSX.Element {
  const { pathname } = props.history.location;

  if (pathname.includes("/page/")) {
    return <BlogListPage {...props} />;
  }

  return (
    <Layout>
      <HomePageHeader />
      <div className={clsx("container", styles.wrapper)}>
        <div className={styles.items}>
          {props.items.slice(0, 3).map(({ content }) => {
            const { date, permalink } = content.metadata;
            const { title, coverImage } = content.frontMatter;
            const coverImagePath = `/img/cover/${coverImage}`;
            return (
              <Link to={permalink} key={date} className={styles.item}>
                <img alt="" src={coverImagePath} className={styles.itemImage} />
                <div className={styles.itemTitle}>{title}</div>
              </Link>
            );
          })}
        </div>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="page/2">
            Więcej artykułów
          </Link>
        </div>
      </div>
    </Layout>
  );
}
