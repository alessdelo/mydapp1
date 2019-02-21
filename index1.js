const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const Web3 = require('web3')
// retrieves infura key from Heroku constants
var infuraKey = process.env.INFURA_ROPSTEN_KEY
// connect to Infura node
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/' + infuraKey))

express()
  .use('/static', express.static(path.join(__dirname, 'public')))
  .set('views', './views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

