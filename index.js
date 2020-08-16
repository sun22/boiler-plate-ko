const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sun:asd135@boilerplate.xijlc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongodb connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})