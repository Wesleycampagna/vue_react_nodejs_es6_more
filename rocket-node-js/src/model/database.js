const mongo = require('mongoose')

const connectDatabase = () => {
    return mongo.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true, useNewUrlParser: true})
}

const create = (json, model) => {
    let databaseModel = mongo.model(model)
    databaseModel.create(json)
}

const index = async (model, page) => {
    let databaseModel = mongo.model(model)
    // const data = await databaseModel.find() mostra todos os registros
    const data = await databaseModel.paginate({ /* where, order .. */ }, { page, limit: 5 })
    return data
}

const findById = async(model, id) => {
    let databaseModel = mongo.model(model)
    const data = await databaseModel.findById(id)
    return data
}

const update = async(model, id, json) => {
    let databaseModel = mongo.model(model)
    const data = await databaseModel.findOneAndUpdate(id, json, {new: true})    
    return data
}

const mongoHandler = {
    connect: connectDatabase,
    mongo,
    create,
    index,
    update,
    findById
}

module.exports = mongoHandler