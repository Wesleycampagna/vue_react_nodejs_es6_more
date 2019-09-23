import React, { Component } from 'react'
import api from '../../services/api'

export default class Product extends Component {

    state = {
        product: {}
    }

    async componentDidMount() {

        // isto serve para https://dominio/:params
        //console.log('params: ', this.props.match.params)

        // uma forma de fazer
        //const values = window.location.search

        // outra forma
        const values = this.props.location.search
        const id = new URLSearchParams(values).get('id')
        
        const response = await api.get(`/product?id=${id}`)

        console.log(`/product?id=${id}`)
        console.log('data: ', response.data)

        this.setState({ product: response.data })
    }
    
    render() {

        const { product } = this.state

        return <div className="product">             
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>URL: <a href={product.url}>{product.url}</a></p>
        </div>
    }
}