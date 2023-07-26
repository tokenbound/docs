import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Tokenbound Documentation",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Token Bound" />
      <meta
        property="og:description"
        content="Open-source tooling for ERC-6551 Token Bound Accounts"
      />
    </>
  ),
  // eslint-disable-next-line @next/next/no-img-element
  logo: <img src="/tokenbound-logo.svg" alt="tokenbound logo" />,
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 0,
    toggleButton: true
  },
  project: {
    link: "https://github.com/tokenbound",
  },
  docsRepositoryBase: "https://github.com/tokenbound/docs/blob/main",
  footer: {
    text: `Tokenbound ${new Date().getFullYear()}`,
  },
  primaryHue: 199,
  banner: {
    key: "ERC-6551",
    text: (
      <a
        href="https://eips.ethereum.org/EIPS/eip-6551"
        target="_blank"
        rel="noreferrer"
      >
        🎉 ERC-6551 is live! We need your support and feedback. Read more →
      </a>
    ),
  },
};

export default config;
