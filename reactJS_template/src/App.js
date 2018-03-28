import React, { Component } from 'react';
import data from './data'
import { BrowserRouter as Router, Route } from "react-router-dom";


import Table from './component/table'
import Template from './component/template'

import './style.css'
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: data,
      editClass: 'editable'  
    }
  }

  save = (obj) => {

    let id = obj.id;
    let data = this.state.data;

    data.map((el,n) => {
      if(el.id == obj.id) {
        data[n] = obj;
      } else {
        return false
      }
    })
    this.setState({ data });
    
  }


  render() {

    let data = this.state.data;

    return (
      <div>
        <h1 style={{'textAlign': 'center'}}>Text style component</h1>

        <Router>        
          <div>
            
            <Route exact path="/" render={()=> <Table data={data}/>} />
            {/* <Table data={data}/> */}
            <Route path="/:id" 
              render={
                ({match})=>{

                  let tmpl = this.state.data.filter((item)=> {
                    if(item.id === Number(match.params.id)){
                      return item
                    }  
                  })

                  return(
                    <Template data={tmpl[0]} saveTmpl={this.save}  editClass={this.state.editClass}/>
                  )
                } 
              } />
          </div>
        </Router>

        
      </div>
    );
  }
}

export default App;
