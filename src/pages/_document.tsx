import Document, { Html, Head, Main, NextScript } from 'next/document';

class GoodplaceDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PCHQJFX" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default GoodplaceDocument;
