import React, { FC } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { GlobalFonts } from './fonts'
import { NormalizeStyle } from './normalize'
import { darkTheme } from './theme-dark'
import { AvailableThemes } from '@themes/available-themes'

interface ThemeProps {
  theme?: AvailableThemes;
}

export const Theme: FC<ThemeProps> = ({ theme, children }) => {
  let themeToShow: DefaultTheme

  switch (theme) {
    case 'dark':
    default:
      themeToShow = darkTheme
      break
  }

  return (
    <ThemeProvider theme={themeToShow}>
      <NormalizeStyle />
      <GlobalFonts />
      {children}
    </ThemeProvider>
  )
}
