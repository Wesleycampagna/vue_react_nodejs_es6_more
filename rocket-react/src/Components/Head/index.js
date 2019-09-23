import React from 'react'
import './style.css'

/* const Header = () => {
    return ()
} */

//faz o return automaticamente em relação ao de cima 
const Header = () => (
    <header id="main-header">My first App in react </header>
)

/* O método acima é equivalente a:
class variable extends Component (
    render() {
        conteudo
    }
) */

export default Header

