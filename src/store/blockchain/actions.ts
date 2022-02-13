declare var window: any

import Web3 from 'web3'
import {Dispatch} from 'redux'

import {State} from '@/types'
import axios from '@/axios'

import SmartContract from '../../contracts/Mucahid.json'

import * as types from './types'

export const connectBlockchain = () => {
  return async (dispatch: Dispatch, getState: () => State) => {
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

          const user = getState().auth.user
          const hasTheSameMetamask = !user.metamask?.some(
            wallet => wallet.walletId == accounts[0],
          )
          if (hasTheSameMetamask) {
            dispatch(addMetamask(accounts[0]) as any)
          }

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

export const getAllMessages: any = () => async (dispatch: Dispatch) => {
  dispatch({
    type: types.GET_ALL_MESSAGES_REQUEST,
  })

  //! If you want to get from the contract you can get it like this
  // const contract = await getState().blockchain.blockchain.contract
  // try {
  //   let messages = await contract.methods.getMessagesTransactions().call()
  //   let boardMessages = await contract.methods
  //     .getAllBoardTransactions()
  //     .call()
  const {data} = await axios.get('/api/general/get-all-messages')

  try {
    dispatch({
      type: types.GET_ALL_MESSAGES_SUCCESS,
      messages: data.messages,
      boardMessages: data.boardMessages,
    })
  } catch (error) {
    dispatch({
      type: types.GET_ALL_MESSAGES_FAILED,
      error,
    })
  }
}

export const addMetamask = (walletId: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: types.ADD_METAMASK_REQUEST,
  })

  try {
    await axios.post('/api/general/add-metamask', {
      walletId,
    })

    dispatch({
      type: types.ADD_METAMASK_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: types.ADD_METAMASK_FAILED,
      error,
    })
  }
}
