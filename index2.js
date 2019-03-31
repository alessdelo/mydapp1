const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const smartContractAddress = process.env.WALLET_ADDRESS

const Web3 = require('web3')
// retrieves infura key from Heroku constants
// Ropsten
// const infuraRopstenKey = process.env.INFURA_ROPSTEN_KEY
// Rinkeby
const infuraRinkebyKey = process.env.INFURA_RINKEBY_KEY

// connect to Infura node
// Ropsten
// const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/' + infuraRopstenKey))
// Rinkeby
// const InfuraWeb3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/' + infuraRinkebyKey))

var index = 'pages/index2'
var header = "../partials/header.ejs"
var nav = "../partials/nav.ejs"
var footer = "../partials/footer.ejs"


var pageData = {
  dapp2: {
    title: "dapp1", 
    content:'../contents/dapp3.ejs',
    descr: 'empty.....',
    nav: nav,
    header: header,
    footer: footer,
    params: [],
    web3: Web3
  },
  dapp3: {
    title:'dapp3',
    content:'../contents/dapp3.ejs',
    descr: 'empty.....',
    nav: nav,
    header: header,
    footer: footer,
    params: []
  }
}

var app = express()
  app.use('/static', express.static(path.join(__dirname, 'public')))
  app.set('views', './views')
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('index'))

// ---------------------------------
// dapp2

app.get('/dapp2', (req, res) => res.render(index,pageData.dapp2))

// ---------------------------------
// ---------------------------------
// ---------------------------------

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))