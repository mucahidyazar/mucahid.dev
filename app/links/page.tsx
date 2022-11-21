export const LINKS = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/mucahidyazar',
    icon: 'twitter-icon',
    color: 'var(--color-twitter)',
    type: 'icon',
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/mucahidyazar',
    icon: 'instagram-icon',
    color: 'var(--color-instagram)',
    type: 'icon',
  },
  {
    label: 'Linkedin',
    url: 'https://www.linkedin.com/in/mucahidyazar/',
    icon: 'linkedin-icon',
    color: 'var(--color-linkedin)',
    type: 'icon',
  },
  {
    label: 'Medium',
    url: 'https://medium.com/@mucahidyazar',
    icon: 'medium-icon',
    color: 'var(--color-medium)',
    type: 'button',
  },
  {
    label: 'Github',
    url: 'https://github.com/mucahidyazar',
    icon: 'github-icon',
    color: 'var(--color-github)',
    type: 'icon',
  },
  {
    label: 'Codepen',
    url: 'https://codepen.io/mucahidyazar',
    icon: 'codepen-icon',
    color: 'var(--color-black)',
    type: 'icon',
  },
  {
    label: 'Steam',
    url: 'https://steamcommunity.com/id/mucahidyazar',
    icon: 'steam-icon',
    color: 'var(--color-steam)',
    type: 'icon',
  },
  {
    label: 'Discord',
    url: 'https://discord.gg/mucahidyazar',
    icon: 'discord-icon',
    color: 'var(--color-discord)',
    type: 'button',
  },
  {
    label: 'Stackoverflow',
    url: 'https://stackoverflow.com/users/8291849/mucahidyazar',
    icon: 'stackoverflow-icon',
    color: 'var(--color-stackoverflow)',
    type: 'icon',
  },
]

export default function Links() {
  return (
    <div id="links">
      <section id="socials">
        <h2 className="text-8xl font-black opacity-10 sm:-translate-x-10">
          Socials
        </h2>
        <div className="-translate-y-14">
          <ul className="flex flex-col flex-wrap gap-2 text-lg sm:text-3xl font-semibold font-sans">
            {LINKS.map(link => (
              <li
                key={link.label}
                className="flex items-center gap-2 link w-fit"
              >
                <a className="flex items-center justify-center rounded-full">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
