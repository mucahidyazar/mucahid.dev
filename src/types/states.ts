import {Status} from './enums'
import {Article, Comment, User, News, API, Starred, Query} from './models'

export interface State {
  blog: BlogState
  auth: AuthState
  contact: ContactState
  general: GeneralState
  home: HomeState
  media: MediaState
  projects: ProjectsState
  settings: SettingsState
}

export type BlogState = {
  articles: {
    status: Status
    data: Article[]
    categories: string[]
    years: string[]
    filters: Query
    error: any
  }
  article: {
    status: Status
    data: Article
    comments: {
      status: Status
      data: Comment[]
      error: any
    }
    error: any
  }
}

export type AuthState = {
  user: User
  expires: string
}

export type ContactState = {
  messages: {
    status: Status
    data: Comment[]
    error: any
  }
  board: {
    status: Status
    data: Comment[]
    error: any
  }
  email: {
    status: Status
    data: Comment[]
    error: any
  }
}

export type GeneralState = {
  activeUsers: User[]
}

export type HomeState = {
  allNews: {
    status: Status
    data: News[]
    error: any
  }
  selectedNews: News | null
}

export type MediaState = {
  instagram: {
    status: Status
    data: string[]
    error: any
  }
}

export type ProjectsState = {
  apis: {
    status: Status
    data: API[]
    count: number | null
    error: any
  }
  starreds: {
    status: Status
    data: Starred[]
    error: any
  }
}

export type SettingsState = {
  isLoadingVisible: boolean
  activeRoute: string
  modalType: string | null
  theme: string
  language: string
}
