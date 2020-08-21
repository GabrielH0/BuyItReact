import React from 'react'
import './Comment.css'

class Comment extends React.Component{

    render(){

        return(
            <div id='comment'>
                    <h6>{this.props.nome}</h6>
                    <p>{this.props.conteudo}
                    </p>
                </div>
        )
    }
}

export default Comment;