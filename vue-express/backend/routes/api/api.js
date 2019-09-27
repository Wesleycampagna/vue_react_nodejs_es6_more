const router = require('express').Router()
const mongo = require('mongodb')

// GET
router.get('/', async (req, res) => {
    const posts = await connection() 
    res.send(await posts.find({}).toArray())
})

// POST
router.post('/', async (req, res) => {
    const posts = await connection() 
    
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    })

    res.status(201).send()
})

// DELETE
router.get('/:id', async (req, res) => {
    const posts = await connection() 
    try{
        await posts.deleteOne({_id: new mongo.ObjectID(req.params.id)})
    }catch(err) {
        console.log(err)
    }
    res.status(200).send()
})

async function connection (){
    const client = await mongo.connect('mongodb://localhost:27017/vueapi', {useUnifiedTopology: true, useNewUrlParser: true})

    return client.db('vueapi').collection('posts')
}

module.exports = router