import React from 'react'
import Carousel from 'react-material-ui-carousel' 
import axios from 'axios'
import Product from './Product'


class CarouselProduct extends React.Component{

    state={products:[]}

    async componentDidMount(){
        const res = await axios.get("http://localhost:8080/produto/listar")
        this.setState({products:res.data.slice(0,3)})
    }

    renderProduct = (product) =>{
        return <Product id="carouselCard" product = {product} link={'/product/details/'+product.id}/>
                
    }

    renderProducts = () => {
        return this.state.products.map(this.renderProduct)
    }

    render(){
        return(
                <Carousel>
                    {this.renderProducts()}
                </Carousel>
        )
    }
}

export default CarouselProduct;