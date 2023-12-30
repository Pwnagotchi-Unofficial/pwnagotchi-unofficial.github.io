// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pwnagotchi Unofficial',
  tagline: 'Deep Reinforcement Learning for WiFi pwning!',
  favicon: 'https://avatars.githubusercontent.com/u/147095178',

  // Set the production url of your site here
  url: 'https://pwnagotchi-unofficial.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pwnagotchi-unofficial', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/pwnagotchi-unofficial/community-wiki/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/pwnagotchi-unofficial/community-wiki/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
      ],
    ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
      // Replace with your project's social card
    image: 'https://avatars.githubusercontent.com/u/147095178',
    navbar: {
      title: 'Pwnagotchi Unofficial',
      logo: {
        alt: 'Pwnagotchi Unofficial Logo',
        src: 'https://avatars.githubusercontent.com/u/147095178',
      },
      items: [
      {
        type: 'docSidebar',
        sidebarId: 'documentationSidebar',
        position: 'left',
        label: 'Documentation',
      },
          //{to: '/blog', label: 'Blog', position: 'left'},
      {
        href: 'https://github.com/pwnagotchi-unofficial/website',
        label: 'GitHub',
        position: 'right',
      },
      ],
    },
    footer: {
      style: 'dark',
      links: [
          /*{
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },*/
      {
        title: 'Community',
        items: [
        {
          label: 'Discord',
          href: 'https://discord.gg/k5GNu5Wg',
        },
        {
          label: 'Reddit',
          href: 'https://reddit.com/r/pwnagotchi',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/Pwnagotchi-Unofficial',
        },
        ],
      },
          /*{
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Pwnagotchi-Unofficial',
              },
            ],
          },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pwnagotchi Unofficial. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
  themes: [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    ],
};

export default config;
