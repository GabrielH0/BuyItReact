import React from 'react'
import './Comments.css'
import Comment from './Comment'
import axios from 'axios'
import NewComment from './NewComment'

class Comments extends React.Component{

    state={
        comments:[]
    }

    async componentDidMount(){
        const response = await axios.get("http://localhost:8080/comentario/"+this.props.product.id)
        this.setState({comments:response.data})
    }

    createComment = (comment) =>{
        console.log(comment)
        return <div><Comment nome = {comment.autor.nome} conteudo = {comment.conteudo}/></div>
    }
    
    renderComments = () => {
        return this.state.comments.map(this.createComment);
    }

    render(){
        return(
                <div id="comments">
                    <h5>Comentários</h5>
                    {this.renderComments()}
                    <NewComment product = {this.props.product}/>
                </div>
        )
    }
}

export default Comments;