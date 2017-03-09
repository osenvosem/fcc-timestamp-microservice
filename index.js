const fs = require('fs')
const express = require('express')
const marked = require('marked')

const app = express()

// Home page
app.get('/', (req, res) => {
  fs.readFile('./README.md', 'utf8', (err, content) => {
    if (err) return res.status(500)
    marked(content, (err, parsed) => {
      if (err) return res.status(500)
      const page = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
          <title>Free Code Camp Timestamp Microservice project</title>
          <style>body {font: 1em "Open Sans"; margin: 40px}</style>
        </head>
        <body>
          <main>
            <article>${parsed}</article>
          </main>
        </body>
        </html>
      `
      return res.send(page)
    })
  })
})

const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

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