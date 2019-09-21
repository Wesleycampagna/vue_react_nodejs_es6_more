require('../model/products')
const mongo = require('../model/database')
const util = require('../utils')

const store = async (req, res) => {

    /* const newPrduct = {
        title: req.body.title,
        description: req.body.description,
        url: req.body.description
    } */

    try{
        await mongo.connect()
        await mongo.create(req.body, util.PRODUCT, (err, small) => {
            if (err) res.send('error')
            return
        })
        res.json(req.body)

    }catch (err) {}
}

const home = (req, res) => {
    res.send('homepage')
}

const product = async (req, res) => {
    try{
        await mongo.connect()
        const result = await mongo.findById(util.PRODUCT, req.query.id)
        res.json(result)
    }catch (err) {}
}

const up = async (req, res) => {
    console.log('pass')
    console.log(req.params.id)
    console.log(req.body)
    try{
        await mongo.connect()
        const result = await mongo.update(util.PRODUCT, req.params.id, req.body)
        res.json(result)
    }catch (err) {
        console.log(err)
    }
}

const index = async (req, res) => {
    try{
        const { page = 1 } = req.query
        mongo.connect()
        data = await mongo.index(util.PRODUCT, page)
    }catch (err) {}
    
    res.json(data)
}

module.exports =  { update: up, store, home, product, index}