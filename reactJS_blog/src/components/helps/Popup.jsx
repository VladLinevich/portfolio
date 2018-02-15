import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


import Button from '../view/Button';
import '../../style/helps/popup.css';

class Popup extends React.Component {

  constructor(){
    super();
    this.state = {

      buttons: true,  
      count: 0,
      countdown: false

    },
    this.buttonBlock = this.buttonBlock.bind(this);
    this.success = this.success.bind(this);
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttons: PropTypes.bool.isRequired,
    countdown: PropTypes.bool
  }

  componentWillMount() {
    this.setState({ 
      title: this.props.title,
      text: this.props.text,
      buttons: this.props.buttons
    })
  }

  buttonBlock(){
    return (
      <section className='popup__btn-wrap' >
          <Button name='Ok' onClick={()=> this.success()}/>
          <Button name='no' onClick={this.props.close()}/>
      </section>
    )
  }

  success(){
    this.props.success();
    (this.props.close())();
  }

  render(){
    return (
      <div className={this.props.successStyle ? 'popup popup_success' : 'popup'} >
          <Button className='popup__close' name='X' onClick={this.props.close()}/>
          <h4>{this.state.title}</h4>
          <p>{this.state.text}</p>

          {this.state.buttons ? 
                            this.buttonBlock()
                            :
                            false
          }

          {
            this.state.countdown ?  
                                 <div>{this.state.count}</div> 
                                 :
                                 false
          }
        </div>     
    )
  }

}


export default Popup