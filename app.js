const express = require('express')
const path = require('path')

const index = require('./routes/index')

const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.use('/public',
 express.static(path.join(__dirname, 'public')))
app.use('/node_modules/bootstrap/dist',
 express.static(path.join(__dirname, 'node_modules/bootstrap/dist')))

app.use('/', index)

const localPort = 3000
const port = process.env.PORT || localPort
app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
