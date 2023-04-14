import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Token Bound" />
      <meta property="og:description" content="ERC-6551 Token Bound" />
    </>
  ),
  logo: <img src="/tokenbound-logo.svg" />,
  project: {
    link: "https://github.com/tokenbound",
  },
  docsRepositoryBase: "https://github.com/tokenbound/docs",
  footer: {
    text: "Tokenbound 2023",
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
