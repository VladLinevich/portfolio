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
      title: '',
      text: '',
      createDate: '',
      createTime: '',
    };

    this.handleSetTitle = this.handleSetTitle.bind(this);
    this.handleSetText = this.handleSetText.bind(this);
    this.handleSetDate = this.handleSetDate.bind(this);
    this.handleSetTime = this.handleSetTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  
  
  handleSetTitle(event) { this.setState({ title: event.target.value }) }
  handleSetText(event) { this.setState({ text: event.target.value  }) }
  handleSetDate(event) { this.setState({ createDate: event.target.value  }) }
  handleSetTime(event) { this.setState({ createTime: event.target.value  }) }


  handleSubmit() {
    
    let date = new Date();


    if(this.state.createDate === '') {
      this.setState({createDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`})
    } 

    if(this.state.createTime === '') {
      this.setState({createTime: `${date.getHours()}:${date.getMinutes()}`})
    }

    this.props.addPost(this.state)
  }

  render(){

    return(
      <aside className='post-add'>
        <header>
          <h4>Добавить пост</h4>
        </header>
          {/* <input type='text' onChange={this.handleSetTitle} /> */}
          <Input  placeholder='Enter Title'  defaultValue="title" onChange={this.handleSetTitle} />
          <Textarea placeholder='Enter Text' defaultValue="text" onChange={this.handleSetText} />
          <Input placeholder='Enter date' type='date' onChange={this.handleSetDate}/>
          <Input placeholder='Enter time' type='time' onChange={this.handleSetTime}/>
          <Checkbox title={'default Date'} check={true}/>
          <Button name='Add post' onClick={this.handleSubmit }/>
      </aside>
    )
  }
}


export default PostAdd