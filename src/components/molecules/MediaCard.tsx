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
      className="relative w-full h-full object-cover rounded-md hover:scale-[105%] duration-500 hover:cursor-pointer overflow-hidden group"
    >
      <Image
        src={media.src}
        alt={`Book Image ${media.name}`}
        width={1000}
        height={1000}
        className="w-full h-full object-cover hover:scale-[110%] duration-500 saturate-50 hover:saturate-100"
      />
      {media.point && (
        <div className="absolute top-4 right-4 bg-opacity-80 text-white px-2 py-1 w-12 h-12 bg-primary rounded-full flex justify-center items-center text-xl font-light border-white border">
          {media.point}
        </div>
      )}
      {showInfo && (
        <div
          className="absolute bottom-0 left-0 right-0 p-4
        bg-gradient-to-t from-black to-black/50 rounded-b-md translate-y-80 group-hover:translate-y-0 duration-500"
        >
          <h2 className="font-semibold">{media.name}</h2>
          <p className="text-xs mt-2">{media.comment}</p>
        </div>
      )}
    </div>
  )
}
