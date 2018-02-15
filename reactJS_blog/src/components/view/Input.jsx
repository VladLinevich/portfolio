import React from 'react';
import PropTypes from  'prop-types';

import '../../style/views/input.css'

const Input = (props) => {
  return(
    <input placeholder={props.placeholder} 
          type={props.type} 
          onChange={props.onChange} 
          {...props}/>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
}

Input.defaultProps = {
  placeholder: 'Enter the text...',
  type: 'text'
}

export default Input