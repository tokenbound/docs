import { defineConfig } from "vocs";

export default defineConfig({
  iconUrl: "/favicon.ico",
  logoUrl: {
    dark: "/tokenbound-light.svg",
    light: "/tokenbound-dark.svg",
  },
  title: "Tokenbound",
  topNav: [
    { text: "ERC-6551", link: "https://eips.ethereum.org/EIPS/eip-6551" },
    { text: "Showcase", link: "/showcase", match: "/showcase" },
  ],
  socials: [
    {
      icon: "github",
      link: "https://github.com/tokenbound",
    },
    {
      icon: "x",
      link: "https://twitter.com/tokenbound_",
    },
    {
      icon: "telegram",
      link: "https://t.me/tokenbound",
    },
  ],
  sidebar: [
    {
      text: "Getting started",
      items: [
        {
          text: "What is Tokenbound?",
          link: "/what-is-tokenbound",
        },
        {
          text: "FAQ",
          link: "/faq",
        },
        {
          text: "Glossary",
          link: "/glossary",
        },
      ],
    },
    {
      text: "Typescript SDK",
      items: [
        {
          text: "Installation",
          link: "/sdk/installation",
        },
        {
          text: "SDK Reference",
          link: "/sdk/methods",
        },
        {
          text: "Migrating to v0.3.1",
          link: "/sdk/migrating-to-v3",
        },
      ],
    },
    {
      text: "Smart Contracts",
      items: [
        {
          text: "Deployed Addresses",
          link: "/contracts/deployments",
        },
      ],
    },
    {
      text: "iFrame",
      items: [
        {
          text: "Installation",
          link: "/iframe",
        },
      ],
    },
    {
      text: "Guides",
      items: [
        {
          text: "Deploy the ERC-6551 Registry",
          link: "/guides/deploy-registry",
        },
        {
          text: "Query TBA address for an NFT",
          link: "/guides/read-a-tba",
        },
        {
          text: "Connect to dapps as your NFT",
          link: "/guides/connect-with-nft",
        },
        {
          text: "Deploy a custom account implementation",
          link: "/guides/deploy-account-implementation",
        },
      ],
    },
  ],
});
