export const stripText = (text: string) => {
  return text.replace(/<\/?[^>]+(>|$)/g, '')
}
