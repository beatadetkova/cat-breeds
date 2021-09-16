// import the Document (required), import HTML, Head, Main, NextScript (optional)
import Document, { Html, Head, Main, NextScript } from "next/document";
// import the SC 'ServerStyleSheet' (required)
import { ServerStyleSheet } from "styled-components"; 
// import the MUI 'ServerStyleSheets' (required)
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles";
// import the package.json version (optional)
import version from "../package.json"; 

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    // create SC sheet
    const sheet = new ServerStyleSheet();
    // create MUI sheets
    const materialUISheets = new MaterialUiServerStyleSheets();
    // keep a reference to original Next renderPage
    const originalRenderPage = ctx.renderPage;

    try {
      // set the renderPage as a function that...
      ctx.renderPage = () =>
        // utilizes the original renderPage function that...
        originalRenderPage({
          // overrides the enhanceApp property with 2 returned wrapped fn's
          // eslint-disable-next-line react/display-name
          enhanceApp: App => props =>
            // that collects and returns SC + MUI styles from App
            sheet.collectStyles(materialUISheets.collect(<App {...props} />))
        });

      // invoke internal Next getInitialProps (which executes the above)
      const initialProps = await Document.getInitialProps(ctx);
      return {
        // from getInitialProps, spread out any initial props
        ...initialProps,
        // and apply any initial style tags... 
        // and apply the MUI style tags...
        // and apply the SC style tags... 
        // to the document's head:
        // <html>
        //   <head>
        //     ...styles are placed here
        //   </head>
        //   <body>...</body>
        // </html>
        styles: (
          <>
            {initialProps.styles}
            {materialUISheets.getStyleElement()}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      // seal the SC sheet -- MUI sheets don't need to be sealed or do so internally
      sheet.seal();
    }
  }

  // below is completely optional...
  // create a custom 'render' method for SEO tags 
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Cat breeds" />
          <meta name="theme-color" content="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-navbutton-color" content="#000000" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="build version" content={version} />
        </Head>
        <body style={{backgroundColor: '#F9FBE7'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;