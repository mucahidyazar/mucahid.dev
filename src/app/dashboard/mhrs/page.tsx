'use client'
export const revalidate = 10

export default function Page() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-2">
        <input
          type="text"
          className="border border-solid border-indigo-500 border-opacity-30 w-full rounded-md h-10 px-4"
          // value={link}
          // onChange={e => setLink(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 rounded-md uppercase font-semibold text-sm"
          // onClick={createUrlShortenerHandler}
        >
          Convert
        </button>
      </div>
      <ul className="border border-solid border-indigo-500 border-opacity-30 w-full rounded-md h-60 bg-indigo-500 bg-opacity-10 overflow-y-auto p-1 flex flex-col gap-1">
        {/* {urlShortenerData?.data.map((data: any) => (
          <UrlShortenerListItem key={data._id} data={data} />
        ))} */}
      </ul>
    </div>
  )
}
