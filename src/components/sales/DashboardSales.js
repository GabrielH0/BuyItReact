import React from "react";
import { Link } from "react-router-dom";
import { House } from "react-bootstrap-icons";
import "./DashboardSales.css";

class DashboardSales extends React.Component {
  render() {
    return (
      <Link to="/comercial/estoque">
        <div className="list-box">
          <div className="a-box">
            <div>
              <House color="black" className="icon-card" />
            </div>
            <div className="descricao-card">
              <b>Estoque</b>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default DashboardSales;
