import { Html, Head, Main, NextScript } from "next/document";
import { allCssProps } from "../components/css";
export default function Document() {
  var css = ``;
  allCssProps.forEach((cssElem) => {
    css += cssElem + "\n";
  });
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <style>{css}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
