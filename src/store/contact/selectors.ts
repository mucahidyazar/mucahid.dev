import {createSelector} from 'reselect'

const selectContact = (state: any) => state.contact

export const makeSelectMessages = createSelector(
  selectContact,
  ({messages}) => messages.data,
)

export const makeSelectMessagesStatus = createSelector(
  selectContact,
  ({messages}) => messages.status,
)

export const makeSelectBoard = createSelector(
  selectContact,
  ({board}) => board.data,
)

export const makeSelectBoardStatus = createSelector(
  selectContact,
  ({board}) => board.status,
)

export const makeSelectEmailStatus = createSelector(
  selectContact,
  ({email}) => email?.status,
)
