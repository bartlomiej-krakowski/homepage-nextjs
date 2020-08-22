export const eventCreator = (name: string, params: Record<string, any>): CustomEvent => {
  const event = new CustomEvent(name, {
    detail: params
  })

  return event
}

export const eventDispatcher = (target: EventTarget, name: string, params: Record<string, any>): CustomEvent => {
  const event: CustomEvent = eventCreator(name, params)

  target.dispatchEvent(event)

  return event
}
