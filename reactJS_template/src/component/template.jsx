import React from 'react'
import {Table} from 'react-bootstrap'

import Edit from './edit'

class Template extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      edit: {
        show: false,
        text: '',
        fontSize: '',
        el: null
      }
    }
  } 

  //listener for blocks
  listenerAdd = () => {
    let tmpl = document.getElementsByClassName(this.props.editClass);

    for (let i = 0; i < tmpl.length; i++) {
      tmpl[i].addEventListener('click', ()=>this.changeElemnt(tmpl[i]), false);
    }
  }

  componentDidMount(){
    this.listenerAdd();
  }

  changeElemnt = (el) => {

    if(this.state.edit.show) {
      this.setState({ 
        edit: {...this.state.edit, show: false}
      })  
    }

    this.setState({ 
      edit: {...this.state.edit, 
              show: true, 
              text: el.innerText, 
              el: el, 
              fontSize: el.style.fontSize == false ? window.getComputedStyle(el,null).getPropertyValue("font-size") 
                                                  : el.style.fontSize}
    })

  }

  setText = (text) => {
    
    let state = this.state.edit;
    let el = state.el
    el.innerText = text;


    this.setState({
      edit: {...state, text, el}
    })

  }


  setFontSize = (size) => {
    let state = this.state.edit;
    let el = state.el;

    let fontSize = `${size}px`;    
    
    el.style.fontSize = fontSize;

    this.setState({
      edit: {...state, el, fontSize}
    })

    
  }


  save = () => {

    let template = document.getElementsByClassName('template')[0].outerHTML
    let modified = Date.now();

    let data = {...this.state.data, template, modified};
    
    this.props.saveTmpl(data)

    this.setState({
      edit: {...this.setState.edit, show: false},
    })

  }


  render(){
    
    let data = this.state.data;
    
    return (
      <div>
        <h3 className='title'>template name: <b> {data.name}</b></h3>
        <div dangerouslySetInnerHTML={{__html: this.state.data.template}} />
        <p>{this.state.editText}</p>
        {
          this.state.edit.show ? <Edit text={this.state.edit.text} 
                                       textChange={this.setText} 
                                       fontSizeChange={this.setFontSize}
                                       fontSize={this.state.edit.fontSize}
                                       save={this.save}/> 
                               : false
        }
        {/* <Edit text={this.state.editText}/> */}
      </div>
    )

  }
  
}




export default Template