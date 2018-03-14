const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
/*

var app = express();
app.get('/', function(req, res) {
    // res.sendFile(path.join('' + 'index1.html'));
    // res.sendFile(path.join('','index.html'));
    ///res.sendFile('index.html');

});

app.listen(PORT);
*/

