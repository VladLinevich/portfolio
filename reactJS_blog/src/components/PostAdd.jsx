import React from 'react';
import PropTypes from 'prop-types';

import '../style/postAdd.css';

import Input from './view/Input'
import Textarea from './view/Textarea'
import Button from './view/Button'
import Checkbox from './view/Checkbox'


class PostAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newPost : {
        title: '',
        text: '',
        createDate: '',
        createTime: '',  
      },
      isDefDate: true
    };

    this.fieldsChange = this.fieldsChange.bind(this);
    this.handleIsDefDate = this.handleIsDefDate.bind(this);
    this.handleSetDefDate = this.handleSetDefDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fieldsChange(event) {
    let elem  = event.target;
    let value = elem.type === 'checkbox' ? elem.checked : elem.value;
    let name  = elem.name;

    let newPost = {...this.state.newPost, [name]: value};
    this.setState({ newPost })
  }
  
  handleIsDefDate(prop){ 
    this.setState({ isDefDate: prop })
  }

  handleSetDefDate() {
    let date = new Date();
    let createDate = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${ date.getMonth() + 1  < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`;
    let createTime = `${date.getHours()}:${date.getMinutes()}`;

    this.setState({
      newPost : {...this.state.newPost, createDate, createTime}
    })
  }
  
  componentDidMount() {
    this.handleSetDefDate();
  }

  handleSubmit() {
  //TODO make a mistake worker
      this.handleSetDefDate();
      this.props.addPost(this.state.newPost)
  
    }  

  render(){

    return(
      <aside className='post-add'>
        <header>
          <h4>Добавить пост</h4>
        </header>
          <Input    placeholder='Enter Title' name='title' onChange={this.fieldsChange} />
          <Textarea placeholder='Enter Text' name='text' onChange={this.fieldsChange} />
          <Input    placeholder='Enter date' name='createDate'  type='date' onChange={this.fieldsChange}/>
          <Input    placeholder='Enter time' name='createTime' type='time' onChange={this.fieldsChange}/>
          <Checkbox title={'default Date'} check={this.state.isDefDate} onChange={this.handleIsDefDate}/>
          <Button name='Add post' onClick={this.handleSubmit }/>
      </aside>
    )
  }
}


export default PostAdd