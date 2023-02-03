import Image from "next/image";


const SIZE = {
  xs: 'max-w-[200px]',
  sm: 'max-w-[400px]',
  md: 'max-w-[800px]',
  lg: 'max-w-[1000px]',
  xl: 'max-w-[1200px]',
  full: 'max-w-[100%]',
}
interface ILinkPreviewCard {
  image: string;
  title: string;
  description: string;
  size?: keyof typeof SIZE;
}
export function LinkPreviewCard({
  image,
  title,
  description,
  size = 'full'
}: ILinkPreviewCard) {
  return (
    <div
      className={`flex gap-4 p-2 hover:bg-indigo-500 hover:bg-opacity-20 ${SIZE[size]}`}>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className='rounded-md w-48 h-32 min-w-[192px]'
      />
      <div className=''>
        <h1 className='text-xl font-semibold mb-2 line-clamp-2'>
          {title}
        </h1>
        <p className='text-sm line-clamp-3'>{description}</p>
      </div>
    </div>
  )
}