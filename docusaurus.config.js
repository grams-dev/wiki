// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Grams Wiki',
  tagline: 'The official documentation for Grams',
  favicon: 'img/favicon.ico',
  url: 'https://wiki.grams.dev',
  baseUrl: '/',
  organizationName: 'grams-dev',
  projectName: 'wiki',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US'
      },
      ar: {
        htmlLang: 'ar-SA',
        direction: 'rtl'
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Wiki',
        logo: {
          alt: 'Grams Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/docs/start', label: 'Get Started', position: 'left' },
          { to: '/docs/develop', label: 'Develop' },
          { to: '/docs/playground', label: 'Playground', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/community', label: 'Community', position: 'left' },
          { type: 'localeDropdown', position: 'right' }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Develop', to: '/docs/develop' },
              { label: 'Playground', to: '/docs/playground' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/grams',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/fKcSzNqHkq',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/grams',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/grams-dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Grams.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['abnf']
      },
    }),
};

module.exports = config;
