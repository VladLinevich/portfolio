import React from 'react';
import PropTypes from  'prop-types';

import '../../style/views/button.css'

const Button = (props) => {
  return(
    <button onClick={props.onClick} {...props}>{props.name}</button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
}


export default Button