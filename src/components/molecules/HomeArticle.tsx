interface IHomeArticle {
  id?: string
  title: string
  content: React.ReactNode
  className?: string
}
export const HomeArticle = ({
  title,
  content,
  className = '',
  ...rest
}: IHomeArticle) => {
  return (
    <section
      className={`flex flex-col gap-4 gap-y-2 sm:flex-row ${className}`}
      {...rest}
    >
      <h2 className="w-28 min-w-[112px] font-medium italic underline">
        {title}
      </h2>
      <div className="flex flex-wrap gap-4 gap-y-2">{content}</div>
    </section>
  )
}
