import React from 'react';
import './ActionItems.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ColorPicker from './ColorPicker'
export default class ActionItems extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            descripcion: "",
            lista:[],
        }
    }
    cambioDescripcion = (event) =>{
        this.setState({descripcion: [event.target.value]});
    }
    agregarComentario = (event) =>{
        event.preventDefault();
        let nuevoComentario ={
            descripcion: this.state.descripcion
        }
        let nuevaListaComentarios = [...this.state.lista, nuevoComentario];
        this.setState({
            lista: nuevaListaComentarios,
            descripcion:"",
        })
    }
    render (){
        return(
    <main className="main"> 
        <h3> <ColorPicker/> Action Items:</h3>    
        <form onSubmit={this.agregarComentario}>
            <input id="comentario" type="text" name="comentario" placeholder="Comentario" 
            onChange={this.cambioDescripcion} 
            value={this.state.descripcion}/>
            <button id="comentar">Publicar</button>
        </form>
        <ul id="lista-comentario">
            {this.state.lista.map(item=>{
                return(
                    <li>{item.descripcion}</li>
                )
            })}
        </ul>
    </main>
        )
    }
}