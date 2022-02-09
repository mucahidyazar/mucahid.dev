declare var window: any

import Web3 from 'web3'
import {Dispatch} from 'redux'

import {State} from '@/types'

import SmartContract from '../../contracts/Mucahid.json'

import * as types from './types'

export const connectBlockchain = () => {
  return async (dispatch: Dispatch) => {
    dispatch({type: types.CONNECTION_REQUEST})
    const {ethereum} = window
    if (ethereum) {
      let accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      let web3 = new Web3(ethereum)

      try {
        const networkId = await ethereum.request({
          method: 'net_version',
        })

        // 137 Global Polygon network
        if (networkId == 5777) {
          const contract = await new web3.eth.Contract(
            SmartContract.abi as any,
            SmartContract.networks['5777'].address,
          )

          dispatch({
            type: types.CONNECTION_SUCCESS,
            web3,
            contract,
            account: accounts[0],
          })

          // Add listeners start
          ethereum.on('accountsChanged', (accounts: string[]) => {
            dispatch(updateAccount(accounts[0]))
          })
          ethereum.on('chainChanged', () => {
            location.reload()
          })
          // Add listeners end
        } else {
          dispatch({
            type: types.CONNECTION_FAILED,
            error: 'Change network to Polygon.',
          })
        }
      } catch (err) {
        dispatch({
          type: types.CONNECTION_FAILED,
          error: 'Something went wrong.',
        })
      }
    } else {
      dispatch({
        type: types.CONNECTION_FAILED,
        error: 'Install Metamask.',
      })
    }
  }
}

export const updateAccount: any = (account: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({type: types.UPDATE_ACCOUNT, account})
    dispatch(getAllMessages())
  }
}

export const getAllMessages: any =
  () => async (dispatch: Dispatch, getState: () => State) => {
    dispatch({
      type: types.GET_ALL_MESSAGES_REQUEST,
    })

    const contract = await getState().blockchain.blockchain.contract

    try {
      let messages = await contract.methods.getMessagesTransactions().call()
      let boardMessages = await contract.methods
        .getAllBoardTransactions()
        .call()

      dispatch({
        type: types.GET_ALL_MESSAGES_SUCCESS,
        messages,
        boardMessages,
      })
    } catch (error) {
      dispatch({
        type: types.GET_ALL_MESSAGES_FAILED,
        error,
      })
    }
  }
