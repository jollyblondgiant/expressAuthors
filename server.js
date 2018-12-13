var express, app, bodyParser, server, mongoose, session, flash, path

express = require('express')
app = express()
bodyParser = require('body-parser')
path = require('path')

app.use(bodyParser.json())

app.use(express.static(__dirname + '/authors/dist/authors'))

require('./server/config/mongoose')

mongoose = require('mongoose')
mongoose.promise = global.Promise

var Author = mongoose.model('Author')

require('./server/config/routes')(app)
server = app.listen(1337)

app.all("*", (req, res,next)=>{
    res.sendFile(path.resolve("./authors/dist/authors/index.html"))
})