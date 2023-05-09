import React from 'react';
import './Likes.css'
import like from './imagenes/like-icon-transparent-16.jpg'
class Likes extends React.Component{
    constructor(props) {
        super(props);
        this.state = { likes: 0 };
      }
    handleLikeClick = () => {
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
  }
    render (){
        const { likes } = this.state;
    return (
      <div>
        <button className="boton" onClick={this.handleLikeClick} disabled={likes >= 1} style={{ backgroundColor: `rgba(${this.props.backgroundColor.r}, ${this.props.backgroundColor.g}, ${this.props.backgroundColor.b}, ${this.props.backgroundColor.a})` }}><img src={like} style={{ backgroundColor: `rgba(${this.props.backgroundColor.r}, ${this.props.backgroundColor.g}, ${this.props.backgroundColor.b}, ${this.props.backgroundColor.a})` }} className="like"alt=""/></button>
        <p>{likes} likes</p>
      </div>
    )
    }
}
export default Likes