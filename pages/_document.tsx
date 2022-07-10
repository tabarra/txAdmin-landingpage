import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ColorModeScript } from '@chakra-ui/color-mode';
import { theme } from '@chakra-ui/theme';

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
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
        </Head>
      </Html>
    )
  }
}

export default txAdmin