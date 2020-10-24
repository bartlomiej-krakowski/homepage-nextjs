import React, { useState, FC } from 'react'

import { Cursor } from '@components'
import { StickyCursorContext } from '@contexts'

export const CursorWrapper: FC = ({ children }) => {
  const [stickyElements, setStickyElements] = useState([])


  return (
    <StickyCursorContext.Provider value={{stickyElements, setStickyElements}}>
      {children}
      <Cursor />
    </StickyCursorContext.Provider>
  )
}
