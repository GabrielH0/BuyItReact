import React from 'react'
import "./NewComment.css"
import {Button,InputGroup,FormControl} from 'react-bootstrap'
import axios from 'axios'

class NewComment extends React.Component{
    state = {comment:""}

    submit = (e)=>{
        e.preventDefault()
        console.log(this.props.product)

        axios.post("http://localhost:8080/produto/"+this.props.product.id,{
            conteudo : this.state.comment   
            
        }).then((req,res)=>{
            console.log(res)
            console.log(req)
        })

    }

    render(){
        return (
            <div>
                <InputGroup className="mb-3" id = "newComment">
                    <FormControl placeholder="Novo Comentário" aria-label="Novo Comentário" aria-describedby="basic-addon2"
                     value = {this.state.comment} onChange = {e => {
                            this.setState({comment: e.target.value})
                        }
                     }  />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick = {this.submit}>Enviar</Button>
                     </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}

export default NewComment