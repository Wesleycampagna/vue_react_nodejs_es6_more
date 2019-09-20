const mongo = require('mongoose')

const connectDatabase = () => {
    return mongo.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true, useNewUrlParser: true})
}

const create = (json, model) => {
    let database_model = mongo.model(model)
    database_model.create(json)
}

/* products.create({
    title: 'React Native',
    description: 'Curso',
    url: 'http://github.com/facebook/react-native'
})
 */

const mongoHandler = {
    connect: connectDatabase,
    mongo,
    create
}

module.exports = mongoHandler