import React from 'react'
import PropTypes from 'prop-types'


import '../style/editPost.css'

import Input from './view/Input'
import Textarea from './view/Textarea'
import Button from './view/Button'

class EditPost extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: this.props.data
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(event) {

    let elem  = event.target;
    let value = elem.value;
    let name  = elem.name;

    let date = new Date();
    let editDate = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${ date.getMonth() + 1  < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`;
    let editTime = `${date.getHours()}:${date.getMinutes()}`;


    let data = {...this.state.data, [name]: value, editDate, editTime, edit: true};
    this.setState({ data })

  }

  handleDelete(id){

  }



  render(){

    let data = this.state.data

    return(
     <div className="editPost">
      
      <span>Title:</span>
      <Input defaultValue={data.title} 
             name="title" 
             onChange={this.handleEdit}/>

<     span>Text:</span>  
      <Textarea  defaultValue={data.text} 
                 name="text" 
                 onChange={this.handleEdit}/>
                 
      <Button name='edit' onClick={()=>this.props.editPost(data)}/>
      <Button name='close' onClick={this.props.close} />
     </div>
    )
  }

}

export default EditPost