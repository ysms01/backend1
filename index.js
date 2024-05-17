const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())
app.get('/', function (req, res) {
  res.send('city weather informatiion')
})
app.get('/:city', function (req, res) {
  const p = req.params
  if (p.city === 'seoul'){
    res.json({'temperture':'22', 'humidity':'50'})
  }else if (p.city === 'busan'){
    res.json({'temperture':'26', 'humidity':'60'})
  }else if (p.city === 'jeju'){
    res.json({'temperture':'25', 'humidity':'70'})
  }else{
    res.json({'temperture':'알수없음', 'humidity':'알수없음'})
  }
})

app.listen(3000)