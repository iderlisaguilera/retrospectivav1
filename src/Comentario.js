import React from 'react'
import './Comentario.css'
import comentario from "./imagenes/Comment-PNG-Free-Image.png"
class Comentario extends React.Component{
    constructor(props){
    super(props)
    this.state={
    descripcion: "",
      lista: [],
    };
}
  cambioDescripcion = (event) => {
    this.setState({ descripcion: [event.target.value] });
  };
  agregarComentario = (event) => {
    event.preventDefault();
    let nuevoComentario = {
      descripcion: this.state.descripcion,
    }
    let nuevaListaComentarios = [...this.state.lista, nuevoComentario];
    this.setState({
      lista: nuevaListaComentarios,
      descripcion: "",
    });
  };
  render (){
    return (
      <div>
        <form onSubmit={this.agregarComentario}>
            <input
            id="comentario"
            type="text"
            name="comentario"
            onChange={this.cambioDescripcion}
            value={this.state.descripcion}/>
          <button id="comentar" style={{ backgroundColor: `rgba(${this.props.backgroundColor.r}, ${this.props.backgroundColor.g}, ${this.props.backgroundColor.b}, ${this.props.backgroundColor.a})` }}><img src={comentario} className="imagen"alt=""/></button>
        </form>
        <ul id="lista-comentario" >
        {this.state.lista.map((item) => {
          return (
            <li id="lista" style={{ backgroundColor: `rgba(${this.props.backgroundColor.r}, ${this.props.backgroundColor.g}, ${this.props.backgroundColor.b}, ${this.props.backgroundColor.a})` }} >
              {item.descripcion}
            </li>
          );
        })}
      </ul>
      </div>
    )
  }
}
export default Comentario
