import React from "react";
import "./Comments.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ColorPicker from "./ColorPicker";
import { ReviewProvider } from "./ReviewContext";
export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descripcion: "",
      lista: [],
      backgroundColor: {
          r: "225",
          g: "155",
          b: "99",
          a: "2",
        },
      }
}
  cambioDescripcion = (event) => {
    this.setState({ descripcion: [event.target.value] });
  };
  agregarComentario = (event) => {
    event.preventDefault();
    let nuevoComentario = {
      descripcion: this.state.descripcion,
    };
    let nuevaListaComentarios = [...this.state.lista, nuevoComentario];
    this.setState({
      lista: nuevaListaComentarios,
      descripcion: "",
    });
  };
  handleChangeComplete = (color) => {
    this.setState({ backgroundColor: color.hex });
  };
  render() {
    return (
      <main className="main">
        <ReviewProvider>
          <h3>
            {" "}
            <ColorPicker
              color={this.state.backgroundColor}
              onChange={this.handleChangeComplete}
            />{" "}
            Went well:
          </h3>
          <form onSubmit={this.agregarComentario}>
            <input
              id="comentario"
              type="text"
              name="comentario"
              placeholder="Comentario"
              onChange={this.cambioDescripcion}
              value={this.state.descripcion}
            />
            <button id="comentar">Publicar</button>
          </form>
          <div style={{ backgroundColor: this.state.backgroundColor }}>
          <ul id="lista-comentario" >
            {this.state.lista.map((item) => {
              return (
                <li id="lista">
                  {item.descripcion} <button id="boton">Comentar</button>
                </li>
              );
            })}
          </ul>
          </div>
        </ReviewProvider>
      </main>
    );
  }
}
