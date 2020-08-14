import React, { useState, useEffect, useRef, FC } from 'react'

import { fromEvent, merge } from 'rxjs'
import { throttleTime } from 'rxjs/operators'
import gsap from 'gsap'

import * as Styled from './Cursor.styled'

export const Cursor: FC = () => {
  const cursorEl = useRef(null)

  const [cursorState, setCursorState] = useState({
    left: 0,
    top: 0,
    radius: 25,
    label: '',
    color: 'white'
  })

  const onCursorEvent = (event) => {
    const newState = {
      left: 0,
      top: 0,
      radius: 25,
      label: '',
      color: 'white'
    }

    if ('clientX' in event) {
      newState.left = event.clientX
    }
    if ('clientY' in event) {
      newState.top = event.clientY
    }
    if ('detail.radius' in event) {
      newState.radius = event.detail.radius
    }
    if ('detail.label' in event) {
      newState.label = event.detail.label
    }
    if ('detail.color' in event) {
      newState.color = event.detail.color
    }

    setCursorState(newState)
  }

  const setSubscription = () => {
    const cursor$ = fromEvent(document, 'cursor')
    const move$ = fromEvent(document, 'mousemove').pipe(throttleTime(12))

    const cursorEvents = merge(
      cursor$,
      move$
    )

    cursorEvents.subscribe(event => onCursorEvent(event))
  }

  useEffect(() => {
    setSubscription()
  }, [])

  useEffect(() => {
    gsap.to(cursorEl.current, {
      x: cursorState.left - cursorState.radius,
      y: cursorState.top - (cursorState.radius * 2),
    })
  }, [cursorState])

  return (
    <Styled.CursorContainer
      ref={cursorEl}
      size={cursorState.radius * 2}
    >
      <Styled.CursorLabel>
        {cursorState.label}
      </Styled.CursorLabel>

      <Styled.Cursor
        color={cursorState.color}
        size={50}
      />
    </Styled.CursorContainer>
  )
}