const express = require('express')
const app = express()
const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
  res.send('Node, Docker, Kube!')
})

app.get('/update', (req, res) => {
  res.send('Update image!')
})

app.get('/update/v2', (req, res) => {
  res.send('Update image v2!')
})

app.get('/update/v3', (req, res) => {
  res.send('Update image v3!')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})