import React, { useState, useEffect } from "react";
import api from "../services/api";

function Estoque() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/produto/listar");
      console.log(response.data);
    }
    getProducts();
  }, []);

  return <div>Estoque</div>;
}

export default Estoque;
