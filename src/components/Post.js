import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


export default class Post extends Component {
    render() {
        return (
            <div>
             
                      <Card style={{marginBottom:"10px"}} >
                        <Card.Body> <h5> Title: </h5>  {this.props.post.title}</Card.Body>

                        <Card.Body>  <h5>  Body:</h5>  {this.props.post.body}</Card.Body>

                        

                      </Card>
                 
            </div>
        )
    }
}
