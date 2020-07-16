import React, { FC } from 'react'

import { Theme } from '@themes'
import { AvailableThemes } from '@themes/available-themes'

export const Layout: FC = ({ children }) => (
  <Theme theme={AvailableThemes.Dark}>
    <main>{children}</main>
  </Theme>
)
