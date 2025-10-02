import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import techWriterWebpackPlugin from './webpack-plugin';
import remarkDefList from 'remark-deflist';

const config: Config = {
  title: 'techwriter.pl',
  tagline: 'Przestrzeń dla tworzących treści techniczne',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://techwriter.pl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'techwriter-pl', // Usually your GitHub org/user name.
  projectName: 'techwriter-pl.github.io', // Usually your repo name.
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },
  onBrokenLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          remarkPlugins: [remarkDefList],
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          blogListComponent: '@site/src/components/BlogList/BlogList',
          postsPerPage: 5,
          blogSidebarTitle: 'Najnowsze artykuły',
          editUrl:
            'https://github.com/techwriter-pl/techwriter-pl.github.io/tree/main',
          remarkPlugins: [remarkDefList],
        },
        pages: {
          remarkPlugins: [remarkDefList],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-0FTS9C7HK4',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/techwriter-social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'techwriter.pl',
      logo: {
        alt: 'logo techwriter.pl',
        src: 'img/logo-square.png',
      },
      items: [
        {
          to: '/tags/articles-in-english',
          label: 'English',
          position: 'right',
        },
        { to: '/wydarzenia', label: 'Wydarzenia', position: 'right' },
        { to: '/konferencje', label: 'Konferencje 2025', position: 'right' },
        { to: '/oferty-pracy', label: 'Oferty pracy', position: 'right' },
        { to: '/linki', label: 'Linki', position: 'right' },
        { to: '/szkolenia', label: 'Szkolenia', position: 'right' },
        { to: '/kontakt', label: 'Kontakt', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          label: 'Facebook',
          href: 'http://www.facebook.com/techwriterpl',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/techwriter-pl/',
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} techwriter.pl`,
    },
    algolia: {
      apiKey: process.env.TECHWRITER_ALGOLIA_API_KEY || 'dummy-key',
      appId: process.env.TECHWRITER_ALGOLIA_APP_ID || 'dummy-id',
      indexName: 'techwriter',
      contextualSearch: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    techWriterWebpackPlugin,
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'wydarzenia',
        routeBasePath: 'wydarzenia',
        path: './wydarzenia',
        authorsMapPath: '../blog/authors.yml',
        blogListComponent:
          '@site/src/components/EventsBlogList/EventsBlogList.tsx',
        blogSidebarTitle: 'Wydarzenia',
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
};

export default config;
