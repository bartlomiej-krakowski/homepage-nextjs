import gsap from 'gsap'
import React, { useState, useEffect, useRef, FC } from 'react'

import { fromEvent, animationFrameScheduler } from 'rxjs'
import { subscribeOn, takeUntil, repeatWhen } from 'rxjs/operators'

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
  sticky: boolean;
  isHovering: boolean;
}

interface CursorPositon {
  top: number;
  left: number;
}

export const Cursor: FC = () => {
  const cursorContainerEl = useRef<HTMLDivElement>(null)
  const cursorEl = useRef<HTMLDivElement>(null)

  const testEl = useRef<HTMLDivElement>(null)

  const [cursorParameters, setCursorParameters] = useState<CursorParameters>({
    size: CursorSizes.Medium,
    label: '',
    color: 'white',
    type: CursorTypes.Default,
    isClicked: false,
    sticky: false,
    isHovering: false,
  })

  const [cursorPositon, setCursorPositon] = useState<CursorPositon>({
    top: 0,
    left: 0,
  })

  const parallaxIt = (e: MouseEvent, target: HTMLDivElement, movement: number) => {
    const boundingRect = target.getBoundingClientRect()
    const relX = e.pageX - boundingRect.left
    const relY = e.pageY - boundingRect.top

    gsap.to(target, 0.3, {
      x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
      y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
      ease: 'power2.easeOut'
    })
  }

  const resetParallax = (target: HTMLDivElement) => {
    gsap.to(target, 0.3, {
      x: 0,
      y: 0,
      ease: 'power2.easeOut'
    })
  }

  const parallaxCursor = (e: MouseEvent, target: HTMLDivElement, movement: number) => {
    const rect = target.getBoundingClientRect()
    const relX = e.pageX - rect.left
    const relY = e.pageY - rect.top

    const left = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement
    const top = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement

    setCursorPositon({
      left,
      top
    })
  }

  const updatePosition = (event: MouseEvent) => {
    if (!cursorParameters.sticky) {
      setCursorPositon({
        top: event.clientY,
        left: event.clientX,
      })
    }
  }

  const cursorHandler = (event: CustomEvent) => {
    setCursorParameters((prevState) => ({
      ...prevState,
      ...event.detail,
    }))

    gsap.to(cursorEl.current, 0.3, {
      scale: cursorParameters.size,
    })
  }

  const mouseDownHandler = () => {
    setCursorParameters((prevState) => ({
      ...prevState,
      isClicked: true,
    }))
  }

  const setSubscription = () => {
    const cursor$ = fromEvent<MouseEvent>(document, 'cursor')
    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove')
    const mousedown$ = fromEvent<MouseEvent>(document, 'mousedown')

    const stickymove$ = fromEvent<MouseEvent>(testEl.current, 'mousemove')
    const stickyenter$ = fromEvent<MouseEvent>(testEl.current, 'mouseenter')
    const stickyleave$ = fromEvent<MouseEvent>(testEl.current, 'mouseleave')

    cursor$.subscribe((event) => cursorHandler(event))
    mousedown$.subscribe(() => mouseDownHandler())

    mousemove$.pipe(
      subscribeOn(animationFrameScheduler),
      takeUntil(stickyenter$),
      repeatWhen(() => stickyleave$)
    ).subscribe(event => updatePosition(event))

    stickymove$.pipe(
      subscribeOn(animationFrameScheduler),
      takeUntil(stickyleave$),
      repeatWhen(() => stickyenter$)
    ).subscribe(event => {
      parallaxCursor(event, testEl.current, 3)
      parallaxIt(event, testEl.current, 10)
    })

    stickyleave$.subscribe(() => resetParallax(testEl.current))
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

  return (
    <>
      <Styled.TestWrapper ref={testEl} >
        <Styled.Test>
          test
        </Styled.Test>
      </Styled.TestWrapper>

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
    </>
  )
}
