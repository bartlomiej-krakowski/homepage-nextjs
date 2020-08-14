import styled from 'styled-components'

type TCursorContainer = {
  size: number;
}

type TCursor = {
  size: number;
  color: string;
}

// export const CursorContainer = styled.div.attrs<TCursorContainer>((props) => ({
//   style: {
//     transform: `translate(${props.transform})`,
//     width: `${props.size}px`,
//     height: `${props.size}px`,
//   },
// }))`
//   position: fixed;
//   z-index: 1200;
//   border-radius: 50%;
//   pointer-events: none;
// `

export const CursorContainer = styled.div<TCursorContainer>`
  position: fixed;
  z-index: 1200;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  pointer-events: none;
`

export const CursorLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 500;
  font-size: 12px;
  transform: translate(-50%, -50%);
`

export const Cursor = styled.div<TCursor>`
  z-index: 1200;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  overflow: visible;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  pointer-events: none;
`
