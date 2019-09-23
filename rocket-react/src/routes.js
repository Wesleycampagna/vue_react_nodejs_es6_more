import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main/page'
import Product from './pages/product/page'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/product" component={Product}/>
        </Switch>
    </BrowserRouter>
)

export default Routes