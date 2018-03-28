import React from 'react'
import ReactBootstrap from 'react-bootstrap'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import getDate from '../helps'

const CTable = (props) => {
  return (
    <Table striped bordered condensed>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Last Modify</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((item, numb) => {
            return(
              <tr key={numb}>
                <td>{numb}</td>
                <td><Link to={item.id.toString()}>{item.name}</Link></td>
                <td>{getDate(item.modified)}</td>
              </tr>  
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default CTable