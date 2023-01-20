interface IChip {
  content: React.ReactNode
  className?: string
}

export default function Chip({ content, className, ...rest }: IChip) {
  return (
    <div
      className="bg-primary text-white py-1 px-3 w-fit text-xs rounded bg-opacity-60 hover:bg-opacity-70 font-semibold uppercase cursor-pointer"
      {...rest}
    >
      {content}
    </div>
  )
}
