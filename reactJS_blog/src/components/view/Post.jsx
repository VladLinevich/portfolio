import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'


import Button from './Button'

import '../../style/views/post.css'

const Post = (props) =>{


  function clipText(text) {
    let maxSize = 30

    if(text.length > maxSize) {
      let newText = text.split(' ').splice(0, maxSize)
      let lastItem = newText[newText.length - 1].split('')
      lastItem.push('...')
      newText[newText.length - 1] = lastItem.join('')
      return newText.join(' ')
    } else {
      return text
    }

   
  }

  clipText(props.data.text)

  return (

    <section className={props.data.edit ? 'post edit' : 'post'}>
      <h5 className='post-title'><Link to={'' + props.data.id}  >{props.data.title}</Link></h5>
      <p className='post-text'>{clipText(props.data.text)}</p>
      <p className='post-time'>
        {props.data.edit ? `editing ${props.data.editDate} / ${props.data.editTime}` 
                         : `${props.data.createDate} / ${props.data.createTime}`}
        
      </p>
      
      <Button name='edit post' onClick={()=>props.editPost(props.index)}/>
      <Button name='delete post' onClick={()=>props.deletePost(props.index)}/>
    </section>
  )
} 

Post.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  createDate: PropTypes.string,
  createTime: PropTypes.string
}


export default Post

