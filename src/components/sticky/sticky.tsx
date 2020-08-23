import gsap from 'gsap'
import React, { FC, useRef, useEffect } from 'react'
import { fromEvent, animationFrameScheduler } from 'rxjs'
import { subscribeOn, takeUntil, repeatWhen } from 'rxjs/operators'

import { eventDispatcher } from '@utils/event-dispatcher/event-dispatcher'

import * as Styled from './sticky.styled'

type TSticky = {
  isHoverable?: boolean;
  label?: string;
}

export const Sticky: FC<TSticky> = ({
  children,
  isHoverable,
  label,
}) => {
  const wrapperEl = useRef<HTMLDivElement>(null)

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

  const mouseEnterHandler =  () => {
    eventDispatcher(document, 'cursor', {
      label: label,
      size: 1.5,
      isHovering: isHoverable ? true : false,
    })
  }

  const mouseLeaveHandler =  () => {
    eventDispatcher(document, 'cursor', {
      label: '',
      size: 1,
      isHovering: false,
    })
  }

  const setSubscription = () => {
    const mousemove$ = fromEvent<MouseEvent>(wrapperEl.current, 'mousemove')
    const mouseenter$ = fromEvent<MouseEvent>(wrapperEl.current, 'mouseenter')
    const mouseleave$ = fromEvent<MouseEvent>(wrapperEl.current, 'mouseleave')

    mousemove$.pipe(
      subscribeOn(animationFrameScheduler),
      takeUntil(mouseleave$),
      repeatWhen(() => mouseenter$)
    ).subscribe(event => {
      parallaxIt(event, wrapperEl.current, 50)
    })

    mouseleave$.subscribe(() => resetParallax(wrapperEl.current))
  }

  useEffect(() => {
    setSubscription()
  }, [])

  return (
    <Styled.Wrapper
      ref={wrapperEl}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {children}
    </Styled.Wrapper>
  )
}
