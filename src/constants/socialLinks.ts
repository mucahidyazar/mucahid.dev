export const SOCIAL_LINKS = {
  email: (id: string) => `mailto:${id}`,
  phone: (id: string) => `tel:${id}`,
  whatsapp: (id: string) => `https://wa.me/${id}`,
  instagram: (id: string) => `https://www.instagram.com/${id}`,
  dribble: (id: string) => `https://www.pinterest.com/${id}`,
  twitter: (id: string) => `https://twitter.com/${id}`,
  facebook: (id: string) => `https://www.facebook.com/${id}`,
  linkedin: (id: string) => `https://www.linkedin.com/in/${id}`,
  github: (id: string) => `https://github.com/${id}`,
  youtube: (id: string) => `https://www.youtube.com/channel/${id}`,
  behance: (id: string) => `https://www.behance.net/${id}`,
  medium: (id: string) => `https://medium.com/${id}`,
  pinterest: (id: string) => `https://www.pinterest.com/${id}`,
  reddit: (id: string) => `https://www.reddit.com/user/${id}`,
  snapchat: (id: string) => `https://www.snapchat.com/add/${id}`,
  soundcloud: (id: string) => `https://soundcloud.com/${id}`,
  twitch: (id: string) => `https://www.twitch.tv/${id}`,
  vimeo: (id: string) => `https://vimeo.com/${id}`,
  telegram: (id: string) => `https://t.me/${id}`,
  tiktok: (id: string) => `https://www.tiktok.com/@${id}`,
  spotify: (id: string) => `https://open.spotify.com/user/${id}`,
  discord: (id: string) => `https://discord.com/users/${id}`,
  steam: (id: string) => `https://steamcommunity.com/id/${id}`,
  codepen: (id: string) => `https://codepen.io/${id}`
} as const

export type SocialLinks = keyof typeof SOCIAL_LINKS
