// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const techWriterWebpackPlugin = require("./webpack-plugin");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "techwriter.pl",
  tagline: "Przestrzeń dla tworzących treści techniczne",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://techwriter.pl",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "techwriter-pl", // Usually your GitHub org/user name.
  projectName: "techwriter-pl.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pl",
    locales: ["pl"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          blogListComponent: "@site/src/components/BlogList/BlogList",
          postsPerPage: 3,
          blogSidebarTitle: "Najnowsze wpisy",
          editUrl:
            "https://github.com/techwriter-pl/techwriter-pl.github.io/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-0FTS9C7HK4",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/techwriter-social-card.png",
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      navbar: {
        title: "techwriter.pl",
        logo: {
          alt: "logo techwriter.pl",
          src: "img/logo-square.png",
        },
        items: [
          { to: "/?feed=true", label: "Blog", position: "right" },
          { to: "/szkolenia", label: "Szkolenia", position: "right" },
          {
            to: "/kim-jestesmy",
            label: "O nas",
            position: "right",
          },
          { to: "/kontrybutorzy", label: "Napisz artykuł", position: "right" },
          {
            to: "https://www.facebook.com/groups/tworzeniedokumentacji",
            label: "Grupa facebookowa",
            position: "right",
          },
          { to: "/kontakt", label: "Kontakt", position: "right" },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            label: "Facebook",
            href: "http://www.facebook.com/techwriterpl",
          },
          {
            label: "X.com (dawny Twitter)",
            href: "http://x.com/techwriterpl",
          },
          {
            label: "Linkedin",
            href: "https://www.linkedin.com/company/techwriter-pl/",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} techwriter.pl`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: process.env.TECHWRITER_ALGOLIA_API_KEY || "dummy-key",
        appId: process.env.TECHWRITER_ALGOLIA_APP_ID || "dummy-id",
        indexName: "techwriter",
        contextualSearch: true,
      },
    }),
  plugins: [techWriterWebpackPlugin],
};

module.exports = config;
