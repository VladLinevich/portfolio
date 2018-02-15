import React from 'react';
import PropTypes from 'prop-types'

import '../../style/views/header.css'

const Header = (props) => {
  return(
    <h1>{props.title}</h1>
  )
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;