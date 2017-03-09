const express = require('express')
const app = express()

var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

app.get('/', (req, res) => {
  res.send('Main page')
})

app.get('/:date', (req, res) => {
  let result = { unix: null, natural: null }
  const date = new Date(req.params.date)
  if (isNaN(date)) return res.send(result)
  result.unix = date.getTime()
  result.natural = `${monthNames[date.getMonth()]} ${('0'+date.getDate()).slice(-2)}, ${date.getFullYear()}`
  return res.send(result)
})

app.listen(3000)