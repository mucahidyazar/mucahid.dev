const Mucahid = artifacts.require('Mucahid')

module.exports = function (deployer) {
  deployer.deploy(
    Mucahid,
    'MUCAHID',
    'MCD',
    'https://mucahid.dev/',
    '0xc9144976353bC2927Fd452039C570bE44C793a88',
  )
}
