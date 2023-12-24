import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Link rel="stylesheet" href="https://fonts.googleapis.com/css?family=SAP+72" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
