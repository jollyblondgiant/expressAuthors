const   mongoose = require('mongoose'),
        Author = mongoose.model('Author'),
        authors = require('../controllers/authors')
module.exports = function(app){
    app.get('/authors', (req,res)=>{
        authors.getAll(req,res)
    })
    app.get('/authors/:id', (req,res)=>{
        authors.getOne(req,res)
    })
    app.post('/authors', (req,res)=>{
        authors.create(req,res)
    })
    app.put('/authors/:id', (req, res)=>{
        console.log("ROUTES.JS", req)
        authors.update(req,res)
    })
    app.delete('/authors/:id', (req,res)=>{
        authors.destroy(req,res)
    })
}