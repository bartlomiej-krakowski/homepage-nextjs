import { useEffect, useState } from 'react'

export const useCustomEvent = (event: CustomEvent) => {
  const [value, updateValue] = useState(undefined)

  const onEvent = ({ detail }) => {
    updateValue(detail)
  }

  useEffect(() => {
    window.addEventListener(event, onEvent)

    return () => window.removeEventListener(event, onEvent)
  })

  return [
    value,
    (detail: object) => {
      window.dispatchEvent(new CustomEvent(event, {
          detail,
      }))
    },
  ]
}
