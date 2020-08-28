import gsap from 'gsap'
import React, { useState, useEffect, useRef, FC } from 'react'

import { fromEvent, animationFrameScheduler } from 'rxjs'
import { subscribeOn, repeatWhen, takeUntil } from 'rxjs/operators'

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

  const [stickyEls, setStickyEls] = useState([])
  const [cursorSubscription, setCursorSubscription] = useState(null)

  const updatePosition = (event: MouseEvent) => {
    console.log('updatePosition')

    setCursorPositon({
      top: event.clientY,
      left: event.clientX,
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

  const cursorHandler = (event: CustomEvent | MouseEvent) => {
    setCursorParameters((prevState) => ({
      ...prevState,
      ...event.detail,
    }))

    if (event.detail.sticky) {
      setStickyEls((prevState) => [...prevState, event.detail.sticky])
    }
  }

  const mouseDownHandler = () => {
    setCursorParameters((prevState) => ({
      ...prevState,
      isClicked: true,
    }))
  }

  const parallaxIt = (e: MouseEvent, parent: HTMLDivElement, target: HTMLDivElement, movement: number) => {
    const boundingRect = parent.getBoundingClientRect()
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

  const setSubscription = () => {
    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove')
    const mousedown$ = fromEvent<MouseEvent>(document, 'mousedown')

    mousedown$.subscribe(() => mouseDownHandler())

    setCursorSubscription(mousemove$.pipe(
      subscribeOn(animationFrameScheduler),
    ).subscribe(event => updatePosition(event)))

    const cursor$ = fromEvent<MouseEvent>(document, 'cursor')
    cursor$.subscribe((event) => cursorHandler(event))
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

  useEffect(() => {
    if(stickyEls && cursorSubscription) {
      cursorSubscription.unsubscribe()

      const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove')
      const stickymove$ = fromEvent<MouseEvent>(stickyEls[0].parent.current, 'mousemove')
      const stickyenter$ = fromEvent<MouseEvent>(stickyEls[0].parent.current, 'mouseenter')
      const stickyleave$ = fromEvent<MouseEvent>(stickyEls[0].parent.current, 'mouseleave')
      const mouseleave$ = fromEvent<MouseEvent>(stickyEls[0].parent.current, 'mouseleave')

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
        parallaxCursor(event, stickyEls[0].parent.current, 3)
        parallaxIt(event, stickyEls[0].parent.current, stickyEls[0].inner.current, 10)
      })

      mouseleave$.subscribe(() => resetParallax(stickyEls[0].inner.current))
    }
  }, [stickyEls])

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
