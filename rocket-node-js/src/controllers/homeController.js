require('../model/products')
const mongo = require('../model/database')
const util = require('../utils')

exports.getHomePage = (req, res) => {

    const a_criar = {
        title: 'React Native',
        description: 'Curso',
        url: 'http://github.com/facebook/react-native'
    }

    mongo.connect()
    mongo.create(a_criar, util.PRODUCT)
    res.send('hello')
}