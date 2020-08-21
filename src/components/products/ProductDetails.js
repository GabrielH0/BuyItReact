import React from 'react'
import axios from 'axios'
import './ProductDetails.css'
import Comments from '../comments/Comments'
import CarouselProduct from './CarouselProduct'
import StoreCard from '../store/StoreCard'

class ProductDetails extends React.Component{

    constructor(props){
         super(props)

        this.state={
            isLoaded:false,
            product:null
        }
    }

    
    state={product:[]}

    async componentDidMount(){
        const {match :{params}} = this.props;
        
        const response = await axios.get("http://localhost:8080/produto/"+params.id)
        this.setState({product:response.data,
                        isLoaded:true     
                     }
                 )
    }
   
    render(){
        return (
            this.state.isLoaded ?
            <div>
                <div id="higher">
                    <div id="img">
                        <img src={process.env.PUBLIC_URL +'/images/'+this.state.product.imagem} />
                    </div>
                    <div id="details">
                        <h1 >{this.state.product.nome}</h1>
                        <h3>Descrição</h3>
                        <h6>{this.state.product.descricao}</h6>
                        <br/>
                        <div id="loja">
                            <StoreCard product = {this.state.product}/>
                        </div>
                    </div>
                
                </div>
                <div id="carousel">
                    <CarouselProduct/>
                </div>
                <div >
                     <Comments product={this.state.product}/>
                </div>
            </div>
            : null
        )
    }
}


export default ProductDetails;

