import React from 'react'
import Product from './Product'
import axios from 'axios'
import './Products.css'

class Products extends React.Component{
    state = {products:[]}

    async componentDidMount(){
        const res  =await axios.get('http://localhost:8080/produto/listar');
        this.setState({products:res.data});
    }       

    createProduct = (product)=>{
        return <Product product={product} link={'/product/details/'+product.id}/>;
        }

    renderProducts = () =>{
        return this.state.products.map(this.createProduct);
    }

    render(){
        return(
            <div id='lista'>
                <div id='produtos'>
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}

export default Products;