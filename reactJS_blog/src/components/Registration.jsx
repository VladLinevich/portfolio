import React from 'react';
import PropTypes from 'prop-types';

import Input from './view/Input';
import Checkbox from './view/Checkbox';
import Button from './view/Button';


import '../style/registration.css';

class Registration extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }

  render(){
    return(
      <section className='registration'>
        <h3>Authorization</h3>
        <hr/>
        <span>Username:</span>
        <Input  type='text' placeholder='Enter username'/>
        <span>Password:</span>
        <Input  type='text' placeholder='Enter password'/>
        {/* <Checkbox title={'if u register check checkbox'} check={false} onChange={console.log('awdawd')}/> */}
        <Button name='auth' onClick={()=>console.log('adw')}/>
      </section>
    )
  }

}

export default Registration