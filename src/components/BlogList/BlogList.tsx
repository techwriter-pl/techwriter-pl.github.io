import Layout from "@theme/Layout";
import React from "react";
import HomePageHeader from "../Home/HomePageHeader";
import Link from "@docusaurus/Link";
import styles from "./BlogList.module.css";
import BlogListPage from "@theme/BlogListPage";
import Partners from "../Partners/Partners";

export default function BlogHome(props): JSX.Element {
  const { pathname, search } = props.history.location;

  if (pathname.includes("/page/") || search.includes("feed=true")) {
    console.log("Condition met");
    return <BlogListPage {...props} />;
  }

  return (
    <Layout>
      <HomePageHeader />
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            {props.items.slice(0, 3).map(({ content }) => {
              const { date, permalink } = content.metadata;
              const { title, coverImage } = content.frontMatter;
              const coverImagePath = `/img/cover/${coverImage}`;
              return (
                <Link
                  to={permalink}
                  className="col col--4 margin-bottom--md"
                  key={date}
                >
                  <div className="card padding--lg" style={{ height: "100%" }}>
                    <img
                      alt=""
                      src={coverImagePath}
                      className={styles.itemImage}
                    />
                    <div className={styles.itemTitle}>{title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
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
