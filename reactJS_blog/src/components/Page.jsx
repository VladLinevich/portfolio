import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';


import Header from './view/Header';
import PostList from './PostList';
import PostAdd from "./PostAdd";
import Button from './view/Button';
import EditPost from './EditPost';
import Popup from './helps/Popup';
import PostView from './view/PostView';

import '../style/page.css';

class Page extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      postFormShow: false,
      selectedPost: '',
      postFormEdit: {
        isShow: false,
        postId: '',
      },
      popup:{
        isShow: false,
        props: props
      }
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleShowform = this.handleShowform.bind(this);  
    this.handleEditForm = this.handleEditForm.bind(this);
    this.handleEditFormClose = this.handleEditFormClose.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
    this.handleShowPopup = this.handleShowPopup.bind(this);
    this.handleClosePopup = this.handleClosePopup.bind(this);
  }

  nextId(){

    let lastItemId = this.state.data.length - 1

    this._nextId = this._nextId || this.state.data[lastItemId].id
    this._nextId = this._nextId + 1
    return this._nextId
  }

  handleAdd(obj) {

    if(obj.title && obj.text) {

      let id  = this.nextId(); 
      let data = this.state.data;
      data.push({...{ id }, ...obj});
    
      this.setState({ 
        data,
        postFormShow : !this.state.postFormShow
      });

      this.handleShowPopup({ title: 'Success',  text: 'Add post',  buttons: false, successStyle: true })

      setTimeout(()=> this.setState({popup : {...this.state.popup, isShow: false}}), 1500)

    } else {
      this.handleShowPopup({title: 'Warning',  text: 'title or text is not defined. Write this pls.',  buttons: false});
    }

  }

  handleShowform(){
    this.setState({postFormShow : !this.state.postFormShow})
  }

  handleEditForm(id){
    this.setState({
      postFormEdit: {...this.state.postFormEdit,
                       isShow: !this.state.postFormEdit.isShow,
                      postId: id}
    })
  }

  handleEditFormClose(){
    this.setState({
      postFormEdit: {...this.state.postFormEdit, isShow: !this.state.postFormEdit.isShow}
    })
  }

  handleEditPost(changeData){
    
    if(changeData.title === '' || changeData.text === '') {

     this.handleShowPopup({title: 'Warning',  text: 'title or text is not defined. Write this pls.',  buttons: false});

    } else {

      let id = this.state.postFormEdit.postId;

      console.log('edit', id);

      let data = this.state.data
      data[id] = changeData;

      this.setState({ data });
      this.handleEditFormClose();
    }

  }

  handleDeletePost(id){

    let data = this.state.data;

    let checkFn = () =>  {
      data.splice(id, 1);
      this.setState({ data });
    }

    this.handleShowPopup({title: 'You shure?',  text: `delete the post ${this.state.data[id].title}`,  buttons: true,success: ()=> checkFn()});

  }

  handleClosePopup(){
    this.setState({
      popup: {...this.state.popup, isShow: false}
    })
  }

  handleShowPopup(props){
    this.setState({
      popup: {...this.state.popup, 
              isShow: true, 
              props: {...props, close: ()=> this.handleClosePopup}}
    })
  }
  


  render() {

    let editPostId = this.state.postFormEdit.postId;

    return(
      <Router>
        <main>

        <Route exact path="/" render={()=> <Header title='Blog page' />}/>
        <Route  path="/:id" render={()=> <Header title='Post page' />}/>
        
          <Button  className='show-btn' name='Show post add Form!' onClick={this.handleShowform}/>

          <Link to='/'>main</Link>

          {this.state.postFormShow ? <PostAdd addPost={this.handleAdd}/> : false}


            <Route path="/:id" render={(match)=>{

              let postId = match.match.params.id
              let keyPost;

              this.state.data.map((el, num)=> {
                if(el.id === Number(postId)){
                  return keyPost = el.id - 1
                }
              })

              return(
                <PostView data={this.state.data[keyPost]} index={keyPost} editHandle={this.handleEditForm}/>
              )

            }}/>

            <Route exact path="/"

                render={()=> (
                  this.state.data.length <= 0 ? <h2 style={{'textAlign': 'center'}}>Mb you want to <Button name='Add' onClick={this.handleShowform}/> post?</h2>
                  : <PostList posts={this.state.data} 
                              editHandle={this.handleEditForm}
                              deleteHandle={this.handleDeletePost} /> 
                )
                                          
            }/>    


          {this.state.postFormEdit.isShow ? <EditPost data={this.state.data[editPostId]} 
                                                      close={this.handleEditFormClose}
                                                      editPost={this.handleEditPost} 
                                                      deletePost={this.handleDeletePost}/> 
                                          : false}


          {this.state.popup.isShow ? <Popup {...this.state.popup.props} /> 
                                  : false}

                            
        </main>
      </ Router>                                                          
    )
  }
}





export default Page