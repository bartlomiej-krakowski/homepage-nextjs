import { createContext, Dispatch, SetStateAction, MutableRefObject } from 'react'


interface StickyCursorContextProps {
  stickyElements: any[];
  setStickyElements: Dispatch<SetStateAction<MutableRefObject<HTMLDivElement>[]>>;
}

export const StickyCursorContext = createContext<StickyCursorContextProps>({
  stickyElements: [],
  setStickyElements: () => {},
})
