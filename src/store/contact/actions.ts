import {Dispatch} from 'redux'
import {toast} from 'react-toastify'

import axios from '@/axios'
import {sendEmailData, State} from '@/types'

import {getAllMessages} from '../blockchain'

import * as types from './types'

export const sendEmail =
  (data: sendEmailData) => async (dispatch: Dispatch) => {
    dispatch({
      type: types.SEND_EMAIL_REQUEST,
    })

    try {
      await axios.post('/api/send/email', data)

      toast('Your message was been sent successfuly', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })

      dispatch({
        type: types.SEND_EMAIL_SUCCESS,
      })
    } catch (error) {
      toast('Your message was not been sent :(', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      dispatch({
        type: types.SEND_EMAIL_FAILED,
        error,
      })
    }
  }

export const mintMessage =
  (title: string, content: string, type: string) =>
  async (dispatch: Dispatch, getState: () => State) => {
    try {
      const blockChainAccount = getState().blockchain.blockchain.account
      const contract = getState().blockchain.blockchain.contract

      const MessageType: any = {
        MESSAGE: 0,
        BOARD: 1,
        EMAIL: 2,
      }
      const gasLimit = 300000
      const cost =
        MessageType[type] === MessageType.BOARD
          ? 400000000000000000
          : 200000000000000000

      contract.methods
        .addToBlockchain(blockChainAccount, title, content, MessageType[type])
        .send({
          gasLimit,
          from: blockChainAccount,
          // value = 0.005 ether
          // 1 eth = 1000000000000000000,
          value: cost,
        })
        .then((/*receipt*/) => {
          dispatch(getAllMessages())
          dispatch(sendEmail({title, content, type}) as any)
        })
    } catch (error: any) {
      throw new Error(error)
    }
  }

export const getStats = () => async (dispatch: Dispatch) => {
  try {
    dispatch({type: types.GET_STATS_REQUEST})
    const {data} = await axios.get(`/api/general/get-stats`)

    dispatch({
      type: types.GET_STATS_SUCCESS,
      data,
    })
  } catch (error) {
    dispatch({
      type: types.GET_STATS_FAILED,
      error,
    })
  }
}
