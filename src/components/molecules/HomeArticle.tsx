interface IHomeArticle {
  id?: string;
  title: string;
  content: React.ReactNode;
  className?: string;
}
export const HomeArticle = ({ title, content, className = '', ...rest }: IHomeArticle) => {
  return (
    <section
      className={`flex gap-4 gap-y-2 ${className}`}
      {...rest}
    >
      <h2 className="font-medium italic underline w-28 min-w-[112px]">
        {title}
      </h2>
      <div className="flex gap-4 gap-y-2 flex-wrap">
        {content}
      </div>
    </section>
  )
}