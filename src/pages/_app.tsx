import { Cursor } from '@components/cursor/cursor'
import { Layout } from '@layout'

export default ({ Component, pageProps }) => (
  <Layout>
    <Cursor />
    <Component {...pageProps} />
  </Layout>
)
