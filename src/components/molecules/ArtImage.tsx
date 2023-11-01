import Image from 'next/image'

import {cn} from '@/utils'

type ArtImageProps = {
  className?: string
  description: string
  imageClassName?: string
  src: string
  onClick?: () => void
}
export function ArtImage({
  className,
  description,
  imageClassName,
  src,
  onClick,
}: ArtImageProps) {
  return (
    <div
      className={cn('w-full overflow-hidden relative group', className)}
      onClick={onClick}
    >
      <Image
        src={src}
        alt="'TRAVELLING'  Canvas, oil, 70x85 cm, 2001"
        width={400}
        height={400}
        className={cn('w-full object-cover', imageClassName)}
      />
      <p className="absolute bottom-0 left-0 text-xs text-white z-20 p-3 max-w-full wrap break-words">
        {description}
      </p>
      <div className="absolute bottom-0 right-0 left-0 h-16 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  )
}
