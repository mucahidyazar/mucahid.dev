export type MetaMask = {
  id: string | number
  walletId: string
}

export type User = {
  id: string | number
  name: string
  email: string
  emailVerified: boolean | null
  image: string
  newsletter: boolean
  role: number
  metamask: MetaMask[]
}

export type Article = {
  id: string | number
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  slug?: string
  categories: string[]
}

export type Comment = {
  id: string | number
  message: string
  postId: string
  authorId: number
  createdAt: string
  updatedAt: string
  author: User
}

export type News = {
  id: string | number
  title: string
  content: string
  authorId: string | number
  createdAt: string
  updatedAt: string
  location: string
  image: string
}

// #Projects Page
// API
export type API = {
  API: string
  Description: string
  Auth: string
  HTTPS: boolean
  Cors: string
  Link: string
  Category: string
}

// Starred
export type Starred = {
  id: string | number
  node_id: string
  name: string
  full_name: string
  private: boolean
  html_url: string
  description: string
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  deployments_url: string
  forks: string
  open_issues: string
  watchers: string
  default_branch: number
}

export type Equipment = {
  id: string | number
  type: string
  name: string
  slug: string
  tags: string[]
  url: string
  image: string
  subtitles: string[]
}

export type CardData = {
  id?: string | number
  image?: string
  name?: string
  subtitles?: string[]
  tags?: string[]
  url?: string
  text?: string
  date?: string
  type?: number
}

export type Query = {[key: string]: string | string[]}

export type RouteModel = {
  id: string
  key?: string
  name: string
  route: string
  source: string
}
