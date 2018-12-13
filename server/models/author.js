const mongoose = require("mongoose")
var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3 
    },
    quote: String, 
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
})

mongoose.model('Author', AuthorSchema)