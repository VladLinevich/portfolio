import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

import '../../style/PostView.css'

const PostView = (props) => {

  const { title, text, createDate, createTime, id } = props.data;
  
  return(
    <div className='post-view'>
      <h1>{title}</h1>
      <p>{text}</p>
      <hr/>
      <p className='post-time'>
      {props.data.edit ? `editing ${props.data.editDate} / ${props.data.editTime}` 
                       : `${props.data.createDate} / ${props.data.createTime}`}
      
    </p>
      <Button onClick={()=> props.editHandle(props.index)} name='edit post'/>
      {/* <Button name='delete' onClick={()=> console.log('del')} /> */}
    </div>
  )   
}


export default PostView