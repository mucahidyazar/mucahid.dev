import Image from 'next/image'

type EventCardProps = {
  title: string
  description: string
  image: string
}
export function EventCard({title, description, image}: EventCardProps) {
  return (
    <div className="group flex h-[12rem] gap-4 p-2 hover:cursor-pointer">
      <div className="font-bold text-gray-500">
        <p className="">JUN</p>
        <div className="h-[1px] w-4 bg-gray-500" />
        <p className="text-2xl">23</p>
      </div>
      <div className="min-w-[264px]">
        <Image
          src={image}
          alt="Bekten Usubaliev"
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-500">{title}</h3>
          <div className="text-xs text-gray-500">
            {/* subtitle */}
            <p>1015 Chestnut St. Philadelphia, PA 19107</p>
            <p>7:00 PM - 9:00 PM</p>
            <p>Free</p>
          </div>
        </div>

        <p className="line-clamp-2 text-xs text-gray-500">{description}</p>

        <div className="flex gap-4 text-sm font-semibold">
          {/* <button>Register</button>
            <button>Donate</button> */}
          <button className="group text-gray-500">
            View Event Details
            <p className="h-[1px] w-0 bg-gray-300 transition-all duration-300 ease-in-out group-hover:h-[1px] group-hover:w-full group-hover:bg-gray-500"></p>
          </button>
        </div>
      </div>
    </div>
  )
}
