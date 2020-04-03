export const supermanActions = (value) => {
  return (
    value
      ? { type: 'SUPERMAN_ON' }
      : { type: 'SUPERMAN_OFF' }
  )
}