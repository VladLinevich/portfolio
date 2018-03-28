import React from 'react'
import {Panel, Button} from 'react-bootstrap'

const Edit = (props) => {

  return (
    <Panel>
      <Panel.Heading>
        <Panel.Title componentClass="h3">Change block</Panel.Title>
      </Panel.Heading>
      <Panel.Body>

        
        <div  className="form-group">
          <label>Text:</label>
          <input type="text" className="form-control" onInput={(event)=>props.textChange(event.target.value)} defaultValue={props.text}/>
        </div> 

        <div  className="form-group">
          <label>font size: {props.fontSize}</label>
          <input type="range" min="5" max="72" defaultValue={parseInt(props.fontSize)}
           onChange={(event)=>props.fontSizeChange(event.target.value)}/>
        </div>

        <Button bsStyle="success" onClick={props.save}>Save</Button>
        
      </Panel.Body>
    </Panel>
  )

}



export default Edit