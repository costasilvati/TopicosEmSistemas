import React, { Component } from "react";

class FormularioDeMovimento extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Descrição do movimento"
          size="30"
        ></input>
        <input type="number" placeholder="0.00"></input>
        <button>Ciar Movimento</button>
      </form>
    );
  }
}

export default FormularioDeMovimento;