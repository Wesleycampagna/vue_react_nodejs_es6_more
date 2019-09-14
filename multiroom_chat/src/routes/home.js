module.exports = (app) =>  {

    app.get('/' , (req, res) => {
        app.src.controllers.index.home(app, req, res)
    })
}