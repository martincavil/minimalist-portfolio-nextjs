import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* SEO meta tags (title should be set in pages with next/head) */}
        {/* SEO meta tags (title should be set in pages with next/head) */}
        {/* These are static fallbacks, dynamic i18n SEO is set in index.tsx */}
        <meta
          name="description"
          content="Martin Cavil Portfolio - Freelance Next.js Developer"
        />
        <meta
          name="keywords"
          content="Martin Cavil, freelance frontend developer, Next.js, React, Tailwind, portfolio"
        />
        <meta name="author" content="Martin Cavil" />
        <meta
          property="og:title"
          content="Martin Cavil Portfolio - Freelance Next.js Developer"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Martin Cavil, a freelance developer specializing in Next.js, React, and Tailwind. High-performance, custom projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/hero/martin-profile.webp" />
        <meta property="og:url" content="https://martincavil.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Martin Cavil Portfolio - Freelance Next.js Developer"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Martin Cavil, a freelance developer specializing in Next.js, React, and Tailwind. High-performance, custom projects."
        />
        <meta name="twitter:image" content="/images/hero/martin-profile.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
