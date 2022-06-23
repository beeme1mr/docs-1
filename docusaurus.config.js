// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Flipt",
  tagline: "An open source, self-hosted feature flag solution",
  url: "https://flipt.io",
  baseUrl: "/docs/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "flipt-io", // Usually your GitHub org/user name.
  projectName: "flipt", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/flipt-io/docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-BL9SGQPLKM",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/banner_og.png",
      announcementBar: {
        id: "moving",
        content:
          '🎉 The Flipt codebase will be moving to the new <a target="_blank" rel="noopener noreferrer" href="https://github.com/flipt-io/">Flipt organization</a> in the coming weeks!',
        backgroundColor: "#ded1f3",
        textColor: "#091E42",
        isCloseable: false,
      },
      navbar: {
        title: "Flipt",
        logo: {
          alt: "Flipt",
          src: "img/logo.svg",
          href: "https://flipt.io",
        },
        items: [
          {
            type: "doc",
            docId: "getting_started",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/markphelps/flipt",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/getting_started",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/kRhEqG2TEZ",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/flipt_io",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/markphelps/flipt",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mark Phelps.`,
      },
      prism: {
        theme: require("prism-react-renderer/themes/dracula"),
      },
    }),
};

module.exports = config;
