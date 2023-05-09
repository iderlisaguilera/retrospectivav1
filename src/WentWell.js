import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ColorPicker from "./ColorPicker";
import "./WentWell.css";
import Likes from "./Likes";
import Comentario from "./Comentario";
import editar from "./imagenes/edit-button.svg";
import borrar from "./imagenes/Delete-Button-PNG-HD-Image.png";
import { ReviewProvider } from "./ReviewContext";
export default class WentWell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descripcion: "",
      editIndex: null,
      editValue: "",
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
    this.setState({ backgroundColor: color.rgb });
  };
  editarComentario = (index, value) => {
    this.setState({
      editIndex: index,
      editValue: value,
    });
  };
  actualizarComentario = (event) => {
    event.preventDefault();
    const lista = [...this.state.lista];
    lista[this.state.editIndex].descripcion = this.state.editValue;
    this.setState({
      lista,
      editIndex: null,
      editValue: "",
    });
  };
  handleChange = (event) => {
    this.setState({
      editValue: event.target.value,
    });
  };
  eliminarComentario = (index) => {
    const lista = [...this.state.lista];
    lista.splice(index, 1);
    this.setState({ lista });
  };
  render() {
    return (
      <main className="main">
        <ReviewProvider>
        <p className="color-picker">Choose card color:<ColorPicker
              color={this.state.backgroundColor}
              onChange={this.handleChangeComplete}
            /></p>
          <h3>
            {" "}
            {" "}
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
            <button id="comentar" style={{ backgroundColor: `rgba(${this.state.backgroundColor.r}, ${this.state.backgroundColor.g}, ${this.state.backgroundColor.b}, ${this.state.backgroundColor.a})` }}>Publicar</button>
          </form>
          <div >
          <ul id="lista-comentario" >
            {this.state.lista.map((item, index) => {
              return (
                <li key={index} style={{ backgroundColor: `rgba(${this.state.backgroundColor.r}, ${this.state.backgroundColor.g}, ${this.state.backgroundColor.b}, ${this.state.backgroundColor.a})` }}>
                  {this.state.editIndex === index ? (
                    <form onSubmit={this.actualizarComentario}>
                      <input
                        type="text"
                        value={this.state.editValue}
                        onChange={this.handleChange}
                      />
                      <button type="submit" style={{ backgroundColor: `rgba(${this.state.backgroundColor.r}, ${this.state.backgroundColor.g}, ${this.state.backgroundColor.b}, ${this.state.backgroundColor.a})` }}>Guardar</button>
                    </form>
                  ) : (
                    <>
                      <span>{item.descripcion}</span>
                      <button style={{ backgroundColor: `rgba(${this.state.backgroundColor.r}, ${this.state.backgroundColor.g}, ${this.state.backgroundColor.b}, ${this.state.backgroundColor.a})` }} onClick={() => this.editarComentario(index, item.descripcion)}>
                        <img src={editar} alt="" style={{width:`15px`, height: `15px`}} />
                      </button>
                      <button onClick={() => this.eliminarComentario(index)} style={{ backgroundColor: `rgba(${this.state.backgroundColor.r}, ${this.state.backgroundColor.g}, ${this.state.backgroundColor.b}, ${this.state.backgroundColor.a})` }}><img src={borrar} alt="" style={{width:`15px`, height: `15px`}}/></button>
                  <Likes backgroundColor={this.state.backgroundColor}/>
                  <Comentario  backgroundColor={this.state.backgroundColor}/>
                  </>
                  )}
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