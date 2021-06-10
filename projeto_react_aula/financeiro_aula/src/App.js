import "./App.css";
import ListaDeMovimentos from "./component/ListaDeMovimentos";
import FormularioDeMovimento from "./component/FormularioDeMovimento";
import { Component } from "react";

// Atividade aula 12:
// https://codepen.io/pen?&editors=0010
class App extends Component {
  render() {
    return (
      <section>
        <FormularioDeMovimento />
        <ListaDeMovimentos />
      </section>
    );
  }
}

export default App;
