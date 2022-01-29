// import * as types from './types'

const connectRequest = () => {
  return {
    type: 'CONNECTION_REQUEST',
  }
}

const connectSuccess = payload => {
  return {
    type: 'CONNECTION_SUCCESS',
    payload: payload,
  }
}

const connectFailed = payload => {
  return {
    type: 'CONNECTION_FAILED',
    payload: payload,
  }
}

const updateAccountRequest = payload => {
  return {
    type: 'UPDATE_ACCOUNT',
    payload: payload,
  }
}

export const connect = () => {
  return async dispatch => {
    dispatch(connectRequest())
    if (window.ethereum) {
      await window.ethereum.enable()
      let web3 = new Web3(window.ethereum)
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        })
        const networkId = await window.ethereum.request({
          method: 'net_version',
        })
        console.log({networkId})
        // 137 Global Polygon network
        if (networkId === '5777') {
          const lipToken = new web3.eth.Contract(
            LipToken.abi,
            LipToken.networks['5777'].address,
          )
          console.log({LipToken, lipToken})
          dispatch(
            connectSuccess({
              account: accounts[0],
              lipToken: lipToken,
              web3: web3,
            }),
          )
          // Add listeners start
          window.ethereum.on('accountsChanged', accounts => {
            dispatch(updateAccount(accounts[0]))
          })
          window.ethereum.on('chainChanged', () => {
            window.location.reload()
          })
          // Add listeners end
        } else {
          dispatch(connectFailed('Change network to Polygon.'))
        }
      } catch (err) {
        dispatch(connectFailed('Something went wrong.'))
      }
    } else {
      dispatch(connectFailed('Install Metamask.'))
    }
  }
}

export const updateAccount = account => {
  return async dispatch => {
    dispatch(updateAccountRequest({account: account}))
    dispatch(fetchData(account))
  }
}
