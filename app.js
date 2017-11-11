const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello Calbot World!')
})

const port = process.env.PORT || localPort
app.listen(port, () => {
    console.log(`Server started on ${port}`)
})
