import React from "react";
import api from "../services/api.js";
import { login } from "../services/auth.js";
import "./signIn.css";
import "../style/style.css";

class signIn extends React.Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleSignIn = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ error: "Preecha e-mail e senha para continuar" });
    } else {
      try {
        const response = await api.post("/login", { username, password });
        login(response.data);
        const usuario = await (await api.get("/user/" + username + "/")).data;
        if (
          usuario.tipoDoUsuario === "CONSUMIDOR" ||
          usuario.tipoDoUsuario == null
        ) {
          this.props.history.push("/");
        } else if (usuario.tipoDoUsuario === "VENDEDOR") {
          this.props.history.push("/comercial");
        }
      } catch (error) {
        this.setState({
          error: "Houve um problema com o login, verifique suas credenciais",
        });
      }
    }
  };

  render() {
    return (
      <div id="signin">
        <div id="form">
          <form onSubmit={this.handleSignIn} id="login">
            <input
              type="text"
              className="input margin-t-small"
              placeholder="email"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <br />
            <input
              type="password"
              className="input margin-t-small"
              placeholder="password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <br />
            <button
              className="btn-default btn-orange margin-t-medium"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default signIn;
