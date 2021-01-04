import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import links from "constants/links";
import { ServerStyleSheet } from "styled-components";
import Router from "next/router";

const { FONTS } = links;

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    console.log(ctx);
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link href={FONTS.DANCING_SCRIPT} rel="stylesheet" />
          <link href={FONTS.ROBOTO_MONO} rel="stylesheet" />
          <link href={FONTS.ORBITRON} rel="stylesheet" />
          <script async src={links.GOOGLE_ANALYTICS}></script>
          <script
            data-ad-client={links.GOOGLE_AD_CLIENT}
            async
            src={links.GOOGLE_ADSENSE}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (!(location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
                console.log("gago")
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-186388859-1');
              }
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
