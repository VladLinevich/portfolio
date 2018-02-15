import React  from "react";
import PropTypes from "prop-types";


import '../style/postList.css'

import Post from './view/Post'


class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts
    }
  }

  static PropTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      createDate: PropTypes.string.isRequired
    }))
  }

  render(){
    let posts = this.state.posts;

   return ( 
      <div className="posts-list" >
          {posts.map( (el, i) => <Post data={el} 
                                  key={i} 
                                  index={i}
                                  editPost={this.props.editHandle}
                                  deletePost={this.props.deleteHandle}/> ) }
      </div>
   )
  }

}

export default PostList