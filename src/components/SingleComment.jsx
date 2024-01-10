import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

class SingleComment extends React.Component{
   constructor(props){
       super(props)
   }
   render(){
    return(
        <ListGroup.Item variant="light" key={this.props.arrCommenti._id}>
            <p>Comment: {this.props.arrCommenti.comment}</p>
            <p>Rate: {this.props.arrCommenti.rate} stars</p>
            <p>Author: {this.props.arrCommenti.author}</p>
        </ListGroup.Item>
    )
   }
}

export default SingleComment;