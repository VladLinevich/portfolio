import React from 'react';
import PropTypes from  'prop-types';

import '../../style/views/textarea.css'

const Textarea = (props) => {
  return(
    <textarea placeholder={props.placeholder} {...props} />
  )
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
}

Textarea.defaultProps = {
  placeholder: 'Enter the text...'
}

export default Textarea