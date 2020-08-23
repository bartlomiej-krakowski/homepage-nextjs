import styled from 'styled-components'

type TCursor = {
  color: string;
}

type TCursorCointainer = {
  isHovering: boolean;
}

export const CursorContainer = styled.div<TCursorCointainer>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  mix-blend-mode: ${({ isHovering }) => isHovering ? 'difference' : ''};
  pointer-events: none;
  will-change: transform;
`

export const CursorLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  color: ${({ theme }) => theme.colors.textReverse};
  font-weight: ${({ theme }) => theme.fonts.variants.bold};
  font-size: 14px;
  line-height: 17px;
  transform: translate(-50%, -50%);
`

export const Cursor = styled.div<TCursor>`
  z-index: 1200;
  width: 100%;
  height: 100%;
  overflow: visible;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  pointer-events: none;
`

export const Test = styled.div`
  height: 100%;
`

export const TestWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  background: red;
`
