/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script'

import {Feedbacks} from '@/components/molecules/Feedbacks'
import {FeedbacksForm} from '@/components/molecules/FeedbacksForm'
import {ME} from '@/constants'
import {db} from '@/lib/db'
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

  const feedbacks = await db.feedback.findMany({
    where: isAdmin ? {} : {status: 'active'},
    orderBy: {createdAt: 'desc'},
  })

  return (
    <div id="feedbacks">
      <section
        id="comments"
        className="flex w-full flex-col gap-5 md:flex-row md:justify-between"
      >
        <aside className="w-full md:w-1/2">
          <h2 className="text-8xl font-black opacity-10 sm:-translate-x-10">
            Twitter
          </h2>
          <div className="max-h-[600px] -translate-y-14 overflow-auto">
            <a
              className="twitter-timeline max-h-96 w-80"
              data-lang="en"
              data-theme="light"
              href={`https://twitter.com/${ME.social.twitter}?ref_src=twsrc%5Etfw`}
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
            <div className="flex h-80 flex-col items-center justify-center">
              <p className="text-2xl font-semibold text-gray-400">
                No feedbacks yet
              </p>
              <p className="text-sm text-gray-400">
                Be the first one to leave a feedback
              </p>
            </div>
          )}

          <div className="h-[1px] w-full -translate-y-7 bg-white opacity-10"></div>

          <FeedbacksForm />
        </aside>
      </section>

      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id={ME.social.instagram}
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
