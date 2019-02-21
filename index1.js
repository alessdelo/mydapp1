const express = require('express')
const Web3 = require('web3')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .use('/static', express.static(path.join(__dirname, 'public')))
  .set('views', './views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

