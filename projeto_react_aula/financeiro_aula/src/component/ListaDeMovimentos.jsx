import React, { Component } from "react";
import CardMovimento from "./CardMovimento";

class ListaDeMovimentos extends Component {
  
    render() {
    return (
      <ul>
        <li>
            <CardMovimento/>
        </li>
        <li>
            <CardMovimento/>
        </li>
      </ul>
    );
  }
}

export default ListaDeMovimentos;