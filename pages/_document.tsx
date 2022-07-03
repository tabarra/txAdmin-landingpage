import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class txAdmin extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <body className="bg-neutral-900">
          <Main />
          <NextScript />
        </body>
        </Head>
      </Html>
    )
  }
}

export default txAdmin