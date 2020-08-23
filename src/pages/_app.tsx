import React from 'react'
import { Cursor } from '@components/cursor/cursor'
import { Layout } from '@layout'

const App = ({ Component, pageProps }) => (
  <Layout>
    <Cursor />
    <Component {...pageProps} />
  </Layout>
)

export default App
