import { ME } from "@/constants"

export const LINKS: TLink[] = [
  {
    label: 'Twitter',
    url: `https://twitter.com/${ME.social.twitter}`,
    icon: 'twitter-icon',
  },
  {
    label: 'Instagram',
    url: `https://instagram.com/${ME.social.instagram}`,
    icon: 'instagram-icon',
  },
  {
    label: 'Linkedin',
    url: `https://www.linkedin.com/in/${ME.social.linkedin}`,
    icon: 'linkedin-icon',
  },
  {
    label: 'Medium',
    url: `https://medium.com/@${ME.social.medium}`,
    icon: 'medium-icon',
  },
  {
    label: 'Github',
    url: `https://github.com/${ME.social.github}`,
    icon: 'github-icon',
  },
  {
    label: 'Codepen',
    url: `https://codepen.io/${ME.social.codepen}`,
    icon: 'codepen-icon',
  },
  {
    label: 'Steam',
    url: `https://steamcommunity.com/id/${ME.social.steam}`,
    icon: 'steam-icon',
  },
  {
    label: 'Discord',
    url: `https://discord.gg/${ME.social.discord}`,
    icon: 'discord-icon',
  },
  {
    label: 'Stackoverflow',
    url: `https://stackoverflow.com/users/8291849/${ME.social.stackoverflow}`,
    icon: 'stackoverflow-icon',
  },
]

export type TLink = {
  label: string
  url: string
  icon: string
}
