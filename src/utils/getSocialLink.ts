import { SOCIAL_LINKS, SocialLinks } from "@/constants";

export function getSocialLink(platform: SocialLinks, id: string) {
  return `${SOCIAL_LINKS[platform]?.(id)}`
}