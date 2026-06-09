import Document, { Html, Head, Main, NextScript } from 'next/document'

class txAdmin extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-txneutralbg">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default txAdmin
