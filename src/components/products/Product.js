import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'   

class Product extends React.Component{

    state={product:this.props.product,link:this.props.Link}

    componentDidUpdate(){
        console.log("prps")
    }

    render(){
        return(
            <div id='card'>
                <Card>
                    <Link to={this.props.link} style={{color: 'black',textDecoration:'none'}}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL +'/images/'+this.state.product.imagem} style={ {width:"100%",height:"60%" }} />
                        <Card.Body>
                            <Card.Title>{this.state.product.nome}</Card.Title>
                            <Card.Text>
                                {this.state.product.descricao}
                                <br/>
                                R$ {this.state.product.preco},00
                            </Card.Text>
                            
                        </Card.Body>
                    </Link>
                </Card>
            </div>
        )
    }
}

export default Product;