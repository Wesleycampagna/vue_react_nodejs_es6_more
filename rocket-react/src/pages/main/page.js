import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './style.css'

export default class Main extends Component {
    
    state = {
        products: [], 
        productInfo: {},
        page: 1
    }

    componentDidMount() {
        this.loadProducts()
    }

    // com arrow functions há como acessar os atributos de Page
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)
        console.log(response.data.docs)
        
        const { docs, ...productInfo} = response.data;

        /* não dou push nem nada no objeto
        são as variaveis que quero -update- que entram em setState */
        this.setState({ products: docs, productInfo, page }) 
    }

    // queria fazer algo assim
    handlerPage = () => {

        const { previousPage, nextPage } = this.refs
        const { page, productInfo } = this.state

        if ( nextPage ) {
            console.log(nextPage)
            if (page === productInfo.pages) return    
            const pageNumber = page + 1
            this.loadProducts(pageNumber)
        }

        if ( previousPage ) {            
            console.log(previousPage)
            if (page === 1) return
            const pageNumber = page - 1
            this.loadProducts(pageNumber)
        }
    }

    previousPage = () => {
        const { page } = this.state

        /* Aprender depois a usar os refs  
        console.log('ref ', this.refs)
        console.log('page ', page) */

        if (page === 1) return
            const npage = page - 1
            this.loadProducts(npage)
    }

    nextPage = () => {
        const { page, productInfo } = this.state

        if (page === productInfo.pages) 
            return
        const npage = page + 1

        this.loadProducts(npage)
    }
    
    render() {

        // desestruturação 
        const { products, page, productInfo } = this.state

        return  <div>                
                <div className="product-list">
                    {products.map(product => (
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>
                            <Link to={`/product?id=${product._id}`}>acessar</Link>
                        </article>
                    ))}
                    <div id="actions">
                        <button disabled={ page === 1 } ref="previousPage" 
                            onClick={this.previousPage}>anterior</button>
                        <button disabled={ page ===  productInfo.pages } ref="nextPage" 
                            onClick={this.nextPage}>proxima</button>
                    </div> 
                </div> 
                
            </div>                 
    }
}   