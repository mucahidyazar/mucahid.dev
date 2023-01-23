/* eslint-disable @next/next/no-sync-scripts */
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

export default function Feedbacks() {
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
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 min-w-[32px] min-h-[32px] bg-gray-300 rounded font-bold text-purple-500 grid place-content-center">
                        MY
                      </div>
                      <p className="font-semibold">{comment.name}</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {comment.date.toString()}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2"></div>
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
                className="w-full p-2 bg-transparent bg-opacity-20 text-gray-300 border border-solid border-white border-opacity-10 rounded placeholder-white placeholder-opacity-20 focus:border-none"
                type="text"
                placeholder="Your name"
              />
            </div>
            <textarea
              className="w-full min-h-[120px] p-2 bg-transparent bg-opacity-20 text-gray-300 border border-solid border-white border-opacity-10 rounded placeholder-white placeholder-opacity-20 focus:border-none"
              placeholder="Your comment"
            />
            <button
              className="w-full p-2 rounded bg-purple-500 text-white ml-auto"
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
