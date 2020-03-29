const mongoose = require('./database')
const mongoosePaginate = require('mongoose-paginate')

const productSchema = mongoose.mongo.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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
productSchema.plugin(mongoosePaginate)
mongoose.mongo.model('products', productSchema)

module.exports = productSchema
