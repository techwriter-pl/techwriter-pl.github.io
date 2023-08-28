// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "techwriter.pl",
  tagline: "Oaza dla tworzących treści techniczne",
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
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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
          { to: "/tags/warsztat", label: "Wiedza", position: "right" },
          {
            to: "/tags/news",
            label: "Wydarzenia",
            position: "right",
          },
          { to: "/tags/praca", label: "Praca", position: "right" },
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
    }),
};

module.exports = config;
