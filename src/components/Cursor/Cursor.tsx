import gsap from 'gsap'
import React, { useState, useEffect, useRef, FC } from 'react'

import { fromEvent, animationFrameScheduler } from 'rxjs'
import { subscribeOn } from 'rxjs/operators'

import * as Styled from './cursor.styled'

export enum CursorTypes {
  Default = '',
  Drag = 'drag',
}

export enum CursorSizes {
  Small = 24 / 40,
  Medium = 40 / 40,
  Large = 80 / 40,
}

interface CursorParameters {
  size: CursorSizes;
  label: string;
  color: string;
  type: CursorTypes;
  isClicked: boolean;
  isHovering: boolean;
}

interface CursorPositon {
  top: number;
  left: number;
}

export const Cursor: FC = () => {
  const cursorContainerEl = useRef<HTMLDivElement>(null)
  const cursorEl = useRef<HTMLDivElement>(null)

  const [cursorParameters, setCursorParameters] = useState<CursorParameters>({
    size: CursorSizes.Medium,
    label: '',
    color: 'white',
    type: CursorTypes.Default,
    isClicked: false,
    isHovering: false,
  })

  const [cursorPositon, setCursorPositon] = useState<CursorPositon>({
    top: 0,
    left: 0,
  })

  const updatePosition = (event: MouseEvent) => {
    setCursorPositon({
      top: event.clientY,
      left: event.clientX,
    })
  }

  const cursorHandler = (event: CustomEvent | MouseEvent) => {
    setCursorParameters((prevState) => ({
      ...prevState,
      ...event.detail,
    }))
  }

  const mouseDownHandler = () => {
    setCursorParameters((prevState) => ({
      ...prevState,
      isClicked: true,
    }))
  }

  const setSubscription = () => {
    const cursor$ = fromEvent<MouseEvent>(document, 'cursor')
    cursor$.subscribe((event) => cursorHandler(event))

    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove')
    const mousedown$ = fromEvent<MouseEvent>(document, 'mousedown')

    mousedown$.subscribe(() => mouseDownHandler())

    mousemove$.pipe(
      subscribeOn(animationFrameScheduler),
    ).subscribe(event => updatePosition(event))
  }

  useEffect(() => {
    setSubscription()
  }, [])

  useEffect(() => {
    gsap.to(cursorContainerEl.current, 0.3, {
      x: cursorPositon.left - 40,
      y: cursorPositon.top - 40,
    })
  }, [cursorPositon])

  useEffect(() => {
    gsap.to(cursorEl.current, 0.3, {
      scale: cursorParameters.size,
    })
  }, [cursorParameters.size])

  return (
    <Styled.CursorContainer
      ref={cursorContainerEl}
      isHovering={cursorParameters.isHovering}
    >
      <Styled.CursorLabel>
        {cursorParameters.label}
      </Styled.CursorLabel>

      <Styled.Cursor
        ref={cursorEl}
        color={cursorParameters.color}
      />
    </Styled.CursorContainer>
  )
}
