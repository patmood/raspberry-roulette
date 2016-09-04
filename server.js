var express = require('express')
var app = express()

app.use(express.static('public'))

app.post('/beer', function (req, res) {
  res.send('Hello World!')
})

app.listen(1337, function () {
  console.log('Ready to party on port 1337!')
})
