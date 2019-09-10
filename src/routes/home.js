module.exports = (app) => {
    const controllHome = require('../controllers/homeController')(app)

    app.get('/', controllHome.home)
    app.get('/home', controllHome.home)
}