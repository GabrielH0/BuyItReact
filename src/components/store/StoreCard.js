import React from 'react'
import {Button} from '@material-ui/core'
import './StoreCard.css'

class StoreCard extends React.Component{


    render(){
        return (
            <div id = "store">
                <h5>Vendido por NOME DA LOJA</h5>
                <h3>R$ {this.props.product.preco}</h3>
                <p>12x de PRECO EM 12</p>
                <Button id="button" variant="contained">COMPRAR</Button>
                <h6>Quantidade em estoque: {this.props.product.quantidade}</h6>
            </div>
        )
    }
}

export default StoreCard