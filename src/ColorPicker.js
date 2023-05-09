import React from 'react'
import { GithubPicker } from 'react-color'
import reactCSS from 'reactcss'
import ReviewContext from './ReviewContext';
class ColorPicker extends React.Component {
  static contextType = ReviewContext
    state = {
      showPicker: false,
      color: {
        r: '225',
        g: '155',
        b: '99',
        a: '2',
      },
    };
 
    onClick = () => {
        this.setState({ 
          showPicker: !this.state.showPicker 
        })
    };
 
    onClose = () => {
      this.setState({ 
        showPicker: false 
      })
    };
 
    onChange = (color) => {
      this.setState({ 
        color:color.rgb
      });
      this.props.onChange(color);
    };
 
    render() {
 
      const styles = reactCSS({
        'default': {
          color: {
            width: '20px',
            height: '20px',
            borderRadius: '2px',
            background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
          },
          popover: {
            position: 'absolute',
            zIndex: '3',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
          swatch: {
            color: 'black',
            borderRadius: '2px',
            cursor: 'pointer',
            display: 'inline-block',
            boxShadow: '0 0 0 1px rgba(0,0,0,.2)',
          },          
        },
      });
      return (
        <div>
          <div style={ styles.swatch } onClick={ this.onClick }>
            <div style={ styles.color } />
          </div>
          { this.state.showPicker ? <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ this.onClose }/>
            <GithubPicker color={ this.state.color } onChange={ this.onChange } />
          </div> : null }
        </div>
      )
    }
}
 
export default ColorPicker