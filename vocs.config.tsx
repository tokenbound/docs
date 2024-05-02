import React from "react";
import { defineConfig } from "vocs";

export default defineConfig({
  titleTemplate: "%s - Tokenbound Documentation",
  head: (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://docs.tokenbound.org" />
      <meta property="og:title" content="Tokenbound Documentation" />
      <meta
        property="og:description"
        content="Open-source tooling for ERC-6551 Token Bound Accounts"
      />
    </>
  ),
  iconUrl: "/favicon.ico",
  logoUrl: {
    dark: "/tokenbound-light.svg",
    light: "/tokenbound-dark.svg",
  },
  title: "Tokenbound",
  editLink: {
    pattern: "https://github.com/tokenbound/docs/edit/main/docs/pages/:path",
    text: "Edit on GitHub",
  },
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
          link: "/intro",
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
          text: "Connect to dapps as your TBA",
          link: "/guides/connect-with-nft",
        },
        {
          text: "Execute TBA transactions using SDK",
          link: "/guides/interact-with-tba",
        },
        {
          text: "Deploy a custom account implementation",
          link: "/guides/deploy-account-implementation",
        },
      ],
    },
  ],
});
