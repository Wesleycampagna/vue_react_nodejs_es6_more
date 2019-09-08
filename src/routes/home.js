module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('home/index')
    })

    app.get('/home', (req, res) => {
        res.render('home/index')
    })
}