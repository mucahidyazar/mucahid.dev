/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script'

import {Feedbacks} from '@/components/molecules/Feedbacks'
import {FeedbacksForm} from '@/components/molecules/FeedbacksForm'
import {prisma} from '@/trpc/db'
import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  const title = 'Feedbacks'
  const description =
    'It is all coming from you. I will be share all oof your feedbacks here. I will be fair and honest to you.'

  return prepareMetadata({
    title,
    description,
    page: title,
  })
}

export default async function Page() {
  const isAdmin = false

  const feedbacks = await prisma.feedback.findMany({
    where: isAdmin ? {} : {status: 'active'},
    orderBy: {createdAt: 'desc'},
  })

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
            Feedbacks
          </h2>
          {feedbacks?.length ? (
            <Feedbacks feedbacks={feedbacks} isAdmin={isAdmin} />
          ) : (
            <div className="flex flex-col items-center justify-center h-80">
              <p className="text-2xl font-semibold text-gray-400">
                No feedbacks yet
              </p>
              <p className="text-gray-400 text-sm">
                Be the first one to leave a feedback
              </p>
            </div>
          )}

          <div className="w-full h-[1px] bg-white opacity-10 -translate-y-7"></div>

          <FeedbacksForm />
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
