import React from 'react'
import api from '../services/api.js'
import { login } from '../services/auth.js'
import './signIn.css'

class signIn extends React.Component {

    state = {
        username: "",
        password: "",
        error: ""
    }

    handleSignIn = async e => {

        console.log("singin")
        console.log(this.state)
        e.preventDefault();
        const { username, password } = this.state;
        if (!username || !password) {
            this.setState({ error: "Preecha e-mail e senha para continuar" })
        } else {
            try {
                const response = await api.post("/login", { username, password });
                login(response.data.token);
                this.props.history.push("/");
            } catch (error) {
                this.setState(
                    { error: "Houve um problema com o login, verifique suas credenciais" }
                );
            }
        }
    }

    render() {
        return (
            <div id="signin">
                <div id="form">
                    <form onSubmit={this.handleSignIn} id="login">
                        <input type="text"
                            placeholder="email"
                            onChange={e => this.setState({ username:e.target.value })}
                        />
                        <br/>
                        <input type="password"
                            placeholder="password"
                            onChange={e => this.setState( { password: e.target.value })}
                        /> 
                        <br/>
                        <button type="submit">Login</button>      
                    </form>
                </div>
            </div>
        )
    }

}



export default signIn