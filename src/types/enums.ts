import Email from 'next-auth/providers/email'

/* eslint-disable no-unused-vars */
export enum Status {
  INIT,
  OK,
  ERROR,
  LOADING,
}
export enum EDrawerPlacement {
  INIT,
  OK,
  ERROR,
  LOADING,
}

export enum EMessageType {
  EMAIL = 'EMAIL',
  MESSAGE = 'MESSAGE',
  BOARD = 'BOARD',
}
