import React from 'react'
import { CursorWrapper } from '@components'
import { Layout } from '@layout'

const App = ({ Component, pageProps }) => (
  <Layout>
    <CursorWrapper>
      <Component {...pageProps} />
    </CursorWrapper>
  </Layout>
)

export default App
