/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Script from 'next/script'

const comments = [
  {
    id: '0',
    name: 'Mucahid Yazar',
    date: '2021-10-05T12:00:00.000Z',
    text: 'This is a comment.',
  },
  {
    id: '1',
    name: 'John Doe',
    date: '2021-10-05T12:00:00.000Z',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, enim?',
  },
  {
    id: '2',
    name: 'Mike Smith',
    date: '2021-10-05T12:00:00.000Z',
    text: 'Lorem ipsum dolor sit amet.',
  },
]

export default function Feeds() {
  return (
    <div id="feeds">
      <section
        id="comments"
        className="flex flex-col md:justify-between md:flex-row gap-5 w-full"
      >
        <aside className="w-full md:w-1/2">
          <h2 className="text-8xl font-black opacity-10 sm:-translate-x-10">
            Twitter
          </h2>
          <div className="-translate-y-14 max-h-[600px] overflow-auto">
            <a
              className="twitter-timeline w-80 max-h-96"
              data-lang="en"
              data-theme="light"
              href="https://twitter.com/MucahidYazar?ref_src=twsrc%5Etfw"
            />

            <Script async src="https://platform.twitter.com/widgets.js" />
          </div>
        </aside>

        <aside className="w-full md:w-1/2">
          <h2 className="text-8xl font-black opacity-10 sm:-translate-x-10">
            Emails
          </h2>

          <ul className="flex flex-col gap-2 -translate-y-14">
            {comments.map(comment => (
              <li
                key={comment.id}
                className="p-4 bg-gray-400 bg-opacity-20 rounded-md hover:bg-opacity-30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full font-bold text-purple-500 grid place-content-center">
                    MY
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{comment.name}</p>
                      <p className="text-gray-400 text-sm">
                        {comment.date.toString()}
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm">{comment.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="w-full h-[1px] bg-white opacity-10 -translate-y-7"></div>

          <form className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <input
                className="w-full h-8 px-2 rounded-md bg-gray-400 bg-opacity-20 text-gray-300"
                type="text"
                placeholder="Your name"
              />
            </div>
            <textarea
              className="w-full h-32 px-2 rounded-md bg-gray-400 bg-opacity-20 text-gray-300"
              placeholder="Your comment"
            />
            <button
              className="w-24 h-8 rounded-md bg-purple-500 text-white ml-auto"
              type="submit"
            >
              Send
            </button>
          </form>
        </aside>
      </section>

      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="mucahidyazar"
        data-description="Support me on Buy me a coffee!"
        data-message=""
        data-color="#FF813F"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      />
    </div>
  )
}
