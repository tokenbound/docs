import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import TokenboundLogo from "public/tokenbound-logo.svg";
import Image from "next/image";

const logo = (<span>
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.92061 0C2.20303 0 0 2.20303 0 4.92061V27.0794C0 29.797 2.20303 32 4.92061 32H27.0794C29.797 32 32 29.797 32 27.0794V4.92061C32 2.20303 29.797 0 27.0794 0H4.92061ZM20.6312 8.26602C19.3414 7.00446 17.2009 6.80959 15.3729 7.12533C13.4655 7.4548 11.4039 8.4101 10.0197 10.0672C8.22699 12.2019 7.76269 15.2679 8.23312 17.9263C8.7003 20.5664 10.1778 23.2372 12.7813 24.255L12.7812 24.255L12.7928 24.2594C16.8626 25.8069 22.4576 22.9905 24.516 17.3899C24.7684 16.7032 24.4163 15.9419 23.7296 15.6896C23.0429 15.4372 22.2817 15.7892 22.0293 16.4759C20.3388 21.0755 16.0764 22.6682 13.7402 21.7852C12.3281 21.23 11.2206 19.604 10.842 17.4647C10.4663 15.3415 10.8966 13.142 12.0495 11.77L12.0522 11.7667C12.945 10.6973 14.3834 9.98489 15.8239 9.73607C17.3428 9.47371 18.398 9.78928 18.7774 10.1589C18.8286 10.2095 18.9205 10.3435 18.9554 10.6805C18.9906 11.0202 18.9543 11.4551 18.8522 11.9472C18.6477 12.9343 18.2366 13.8856 18.0644 14.2202C17.863 14.6114 17.4773 15.3139 16.9721 15.8943C16.4286 16.5187 16.0123 16.7016 15.7585 16.6938C15.6161 16.6835 15.4769 16.646 15.3486 16.5832C15.217 16.5188 15.0995 16.4291 15.0026 16.3193C14.9057 16.2095 14.8313 16.0816 14.7838 15.9431C14.7363 15.8045 14.7166 15.6579 14.7257 15.5118C14.7348 15.3656 14.7727 15.2226 14.8371 15.0911C14.9015 14.9595 14.9911 14.8419 15.101 14.745C15.2108 14.6481 15.3386 14.5738 15.4772 14.5263C15.6158 14.4788 15.7623 14.459 15.9085 14.4682C16.6387 14.5138 17.2676 13.9589 17.3132 13.2287C17.3589 12.4985 16.8039 11.8696 16.0737 11.8239C15.5803 11.7931 15.0856 11.8598 14.618 12.0201C14.1503 12.1804 13.7188 12.4313 13.3481 12.7584C12.9773 13.0855 12.6747 13.4824 12.4574 13.9265C12.24 14.3705 12.1123 14.8531 12.0815 15.3465C12.0506 15.8399 12.1173 16.3346 12.2776 16.8023C12.438 17.2699 12.6888 17.7015 13.0159 18.0722C13.3431 18.4429 13.74 18.7456 14.184 18.9629C14.6281 19.1802 15.1106 19.3079 15.6041 19.3388L15.6136 19.3394L15.6232 19.3398C17.148 19.4129 18.2932 18.4119 18.9705 17.6337C19.6921 16.8047 20.1952 15.8695 20.4201 15.4326C20.6741 14.9392 21.1823 13.7597 21.4465 12.4849C21.5789 11.8462 21.6643 11.1174 21.5907 10.4073C21.517 9.6962 21.2702 8.89373 20.6332 8.26801L20.6312 8.26602Z" fill="currentColor"/>
</svg>

<style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition:
          mask-position 1s ease,
          -webkit-mask-position 1s ease;
      }
    `}</style>

</span>)

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
  logo,
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true
  },
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
