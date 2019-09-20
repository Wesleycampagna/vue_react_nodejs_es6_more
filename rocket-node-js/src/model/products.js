const mongoose = require('./database')

const productSchema = mongoose.mongo.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.mongo.model('products', productSchema)

module.exports = productSchema
