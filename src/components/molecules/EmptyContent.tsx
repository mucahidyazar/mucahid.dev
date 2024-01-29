import {cn} from '@/utils'

export function EmptyContent({
  className,
  description,
  title,
}: EmptyContentProps) {
  return (
    <div
      className={cn(
        'flex h-80 flex-col items-center justify-center gap-4 border border-foreground border-opacity-10 bg-foreground bg-opacity-5 text-foreground text-opacity-60',
        className,
      )}
    >
      <p className="text-2xl font-semibold">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  )
}
export type EmptyContentProps = {
  className?: string
  description: string
  title: string
}
