import Image from 'next/image'

interface Media {
  src: string
  name: string
  point?: number
  comment?: string
}
interface MediaCardProps {
  media: Media
  onClick?: () => void
  showInfo?: boolean
}
export function MediaCard({media, onClick, showInfo}: MediaCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative h-full w-full overflow-hidden rounded-sm object-cover duration-500 hover:cursor-pointer"
    >
      <Image
        src={media.src}
        alt={`Book Image ${media.name}`}
        width={1000}
        height={1000}
        className="h-full w-full object-cover saturate-50 duration-500 hover:scale-[110%] hover:saturate-100"
      />
      {media.point && (
        <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-main bg-opacity-80 px-2 py-1 text-xl font-light text-background">
          {media.point}
        </div>
      )}
      {showInfo && (
        <div
          className="absolute bottom-0 left-0 right-0 translate-y-80
        rounded-b-md bg-gradient-to-t from-black to-black/50 p-4 text-background duration-500 group-hover:translate-y-0"
        >
          <h2 className="font-semibold">{media.name}</h2>
          <p className="mt-2 text-xs">{media.comment}</p>
        </div>
      )}
    </div>
  )
}
