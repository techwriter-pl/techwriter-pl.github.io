import Layout from "@theme/Layout";
import React from "react";
import HomePageHeader from "../Home/HomePageHeader";
import Link from "@docusaurus/Link";
import styles from "./BlogList.module.css";
import clsx from "clsx";

export default function BlogHome({ items, ...otherProps }): JSX.Element {
  return (
    <Layout>
      <HomePageHeader />
      <div className={clsx("container", styles.wrapper)}>
        {items.slice(0, 3).map(({ content }) => {
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
    </Layout>
  );
}
