var     Author = require('../models/author'),
        mongoose = require('mongoose'),
        Author = mongoose.model('Author')
module.exports = {
    getAll: (req,res)=>{
        Author.find({}, (err, authors)=>{
            res.json(authors)
        })
    },
    getOne:(req,res)=>{
        var id = req.params.id
        Author.findById(id, (err,author)=>{
            if(err){res.json(err)}
            else{res.json(author)}
        })
    },
    create:(req,res)=>{
        var author = new Author
        author.name = req.body.name
        author.quote = req.body.quote
        author.save(function(err){
            if(err){
                for(var idx in err.errors){
                    console.log(err.errors[idx].message)
                }
                res.json(author)
            }else{
                res.json(author)
            }
        })
    },
    update:(req,res)=>{
        
        console.log("REQ.BODY", req.body)
        Author.findByIdAndUpdate(req.params.id,{
            $set:{
                name: req.body.name,
                quote: req.body.quote
            },
        },
        (err, author)=>{
            if(err){
                for(var key in err.errors){
                    console.log(err.errors[key].message)
                }
                res.json(author)
            }else{res.json(author)}
        })
    },
    destroy:(req,res)=>{
        Author.findByIdAndRemove(req.params.id, (err)=>{
            res.redirect('/')
        })
    }
}