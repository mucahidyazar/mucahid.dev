'use client'
import Image from 'next/image'
import {useState} from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            <a href="#hero">Acme Rockets</a>
          </h1>
          <button
            className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
            onClick={() => setIsOpen(prev => !prev)}
          >
            <div
              className={`bg-white w-8 h-1 rounded absolute top-4 right-4 transition-all duration-500 before:content-[''] before:bg-white before:h-1 before:w-8 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-white after:h-1 after:w-8 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3
            ${isOpen ? 'toggle-btn' : ''}
            `}
            ></div>
          </button>

          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
        </section>

        <section
          id="mobile-menu"
          className={`absolute top-68 bg-black w-full text-5xl flex-col justify-center origin-top animate-open-menu ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          <nav
            className="flex flex-col min-h-screen items-center py-8"
            aria-label="mobile-nav"
          >
            <a
              href="#hero"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={handleClose}
            >
              Hero
            </a>
            <a
              href="#rockets"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={handleClose}
            >
              Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={handleClose}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={handleClose}
            >
              Contact
            </a>
            <a
              href="#legal"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={handleClose}
            >
              Legal
            </a>
          </nav>
        </section>
      </header>

      <main className="max-w-4xl mx-auto">
        <section
          id="hero"
          className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
        >
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
              We Boldy Go{' '}
              <span className="text-indigo-700 dark:text-indigo-300">
                Where No Rocket
              </span>{' '}
              has Gone Before...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              We are building the next generation of rockets to take you to the
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              moon and beyond. We are a small team of rocket scientists and
            </p>
          </article>
          <Image
            src="/img/rocketdab.png"
            alt="rocketdab"
            width={500}
            height={500}
            className="w-1/2"
          />
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section
          id="rockets"
          className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
        >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Rockets
          </h2>

          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl">
              <Image
                src="/img/rocketman.png"
                alt="rocketman"
                width={500}
                height={500}
                className="w-1/2"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white dark:bg-black">
                Explorer
              </h3>
              <p className="hidden sm:block ext-3xl text-center text-slate-500 dark:text-white dark:bg-slate-400 mt-2">
                $
              </p>
              <p className="sm:hidden text-3xl text-center text-slate-900 dark:text-white dark:bg-slate-400 mt-2">
                Affordable Exploration
              </p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl">
              <Image
                src="/img/rocketride.png"
                alt="rocketride"
                width={500}
                height={500}
                className="w-1/2"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white dark:bg-black">
                Adventurer
              </h3>
              <p className="hidden sm:block ext-3xl text-center text-slate-500 dark:text-white dark:bg-slate-400 mt-2">
                $$
              </p>
              <p className="sm:hidden text-3xl text-center text-slate-900 dark:text-white dark:bg-slate-400 mt-2">
                Best Selling Rockets
              </p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl">
              <Image
                src="/img/rocketlaunch.png"
                alt="rocketlaunch"
                width={500}
                height={500}
                className="w-1/2"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white dark:bg-black">
                Infinity
              </h3>
              <p className="hidden sm:block ext-3xl text-center text-slate-500 dark:text-white dark:bg-slate-400 mt-2">
                $$$
              </p>
              <p className="sm:hidden text-3xl text-center text-slate-900 dark:text-white dark:bg-slate-400 mt-2">
                Luxurt Starship
              </p>
            </li>
          </ul>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section
          id="testimonials"
          className="p-6 my-12 widescreen:section-min-height tallscreen:section-min-height"
        >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Testimonials
          </h2>

          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
              <p className='text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-["\201C"] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2  after:content-["\201D"] after:font-serif after:absolute after:-bottom-18 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2'>
                I have been using this product for 2 years and it has changed my
                life.
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
              &#8212; Wile E. Coyote, Genius
            </figcaption>
          </figure>

          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
              <p className='text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-["\201C"] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2  after:content-["\201D"] after:font-serif after:absolute after:-bottom-18 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2'>
                I have been using this product for 2 years and it has changed my
                life forever.
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
              &#8212; Wile E. Coyote, Genius
            </figcaption>
          </figure>

          <figure className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
              <p className='text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-["\201C"] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2  after:content-["\201D"] after:font-serif after:absolute after:-bottom-18 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2'>
                I have been using this product for 2 years and it has changed my
                life forever.
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
              &#8212; Wile E. Coyote, Genius
            </figcaption>
          </figure>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section
          id="contact"
          className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
        >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Contact Us
          </h2>

          <form
            action=""
            className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-start gap-4"
          >
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              minLength={3}
              maxLength={60}
              placeholder="Your subject"
              className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={5}
              required
              placeholder="Your message"
              className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
            />

            <button
              type="submit"
              className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none"
            >
              Submit
            </button>
          </form>
        </section>
      </main>

      <section>
        <button className="bg-green-700 p-4 group hover:bg-green-500">
          <h1 className="group-hover:text-red-400">
            GROUP === Hover button then change h1
          </h1>
        </button>
      </section>

      <footer id="footer" className="bg-teal-700 text-white text-xl">
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
          <address>
            <h2>Acme Rocket-Powered Products, Inc</h2>
            555 Astro Way
            <br />
            Los Angeles, CA 90066
            <br />
            Email: <a href="mailto:test@example.com">test@example.com</a>
            <br />
            Phone: <a href="tel:555-555-5555">555-555-5555</a>
          </address>

          <nav className="hidden md:flex flex.col gap-2" aria-label="footer">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact
            </a>
          </nav>

          <div className="flex flex-col sm:gap-2">
            <div className="text-right">Copyright &#169; 2021</div>
            <div className="text-right">All Rights Reserved</div>
          </div>
        </section>
      </footer>
    </div>
  )
}
