import React from "react"



class Posts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          
          posts: [],
        
        };
      }
    
      componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((posts) => {
            this.setState({ ...this.state, posts });
          });
      }
    
}