import React from 'react'

import Routes from './routes'
import Header from './Components/Head'
/* import Page from './pages/main/page'
import Product from './pages/product/page' */

import './style.css'

const App = () => (
    <div className="App">
      <Header/>
      <Routes />
    </div>
  )

export default App
