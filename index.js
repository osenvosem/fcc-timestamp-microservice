const express = require('express')
const app = express()

var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

app.get('/', (req, res) => {
  res.send('Main page')
})

app.get('/:date', (req, res) => {
  let result = { unix: null, natural: null }
  
  // create Date object
  const date = isTimestamp(req.params.date) ?
    new Date(+req.params.date) :
    new Date(req.params.date)
    
  // if date is incorrect
  if (isNaN(date)) return res.send(result)

  // filled the result object and send it
  result.unix = date.getTime()
  result.natural = `${monthNames[date.getMonth()]} ${('0'+date.getDate()).slice(-2)}, ${date.getFullYear()}`
  return res.send(result)
})

// helper function
function isTimestamp(ts) {
  return !isNaN(ts) && isFinite(ts) && /\d{8,15}/.test(ts)
}

app.listen(3000)