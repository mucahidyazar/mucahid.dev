interface IHomeSection {
  id: string
  children: React.ReactNode
}
export const HomeSection = ({ children, id }: IHomeSection) => {
  return (
    <section id={id} className="w-3/4 flex flex-col gap-2">
      {children}
    </section>
  )
}