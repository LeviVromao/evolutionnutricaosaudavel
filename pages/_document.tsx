import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link href="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap" rel="stylesheet" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
