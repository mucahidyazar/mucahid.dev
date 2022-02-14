export const dataTestTarget = (v: string) => {
  return !process.env.PRODUCTION ? {'data-cy': v} : ''
}
