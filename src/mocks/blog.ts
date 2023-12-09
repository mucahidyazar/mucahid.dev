type Option = { value: string, label: string, isNew?: boolean }

const initialTags = [
  { label: 'React', value: 'react', isNew: false },
  { label: 'TypeScript', value: 'typescript', isNew: false },
  { label: 'JavaScript', value: 'javascript', isNew: false },
] as Option[]

const initialYears = Array.from({ length: 5 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return { label: year.toString(), value: year.toString() }
}) as Option[]

const initialCategories = [
  { label: 'Article', value: 'article' },
  { label: 'Tutorial', value: 'tutorial' },
  { label: 'Note', value: 'note' },
] as Option[]

export type { Option }

export {
  initialCategories,
  initialTags,
  initialYears,
}