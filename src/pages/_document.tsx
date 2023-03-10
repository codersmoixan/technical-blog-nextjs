import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheets } from "@mui/styles";
import Script from "next/script";
// import index from "@/src/theme/theme";

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="zh">
        <Head>
          <meta name="baidu-site-verification" content="k2rYxsvycd" />
          {/* PWA primary color */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          {/*<meta name="theme-color" content={index.palette.primary.main} />*/}
          <link rel="icon" type="image/png" href="/favicon.ico" />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(
      <App {...props} />,
    ),
  });

  const initialProps = await Document.getInitialProps(ctx);
  const { pathname } = ctx;

  //  const acceptLanguage = parse(headers['accept-language']);
  //   console.log(acceptLanguage);

  const lang = pathname.startsWith('en') ? 'en' : 'zh-hans';
  //  return {...initialProps, lang};
  return {
    ...initialProps,
    lang,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()],
  };
};
