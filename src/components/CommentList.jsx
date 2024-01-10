import React from "react";
import SingleComment from "./SingleComment";
import ListGroup from 'react-bootstrap/ListGroup';

class CommentsList extends React.Component{
   constructor(props){
       super(props)
   }
   render(){
       return(
         <>
           <ListGroup>
            {this.props.commenti.map((commentsLi,index) =>(
               <SingleComment arrCommenti={commentsLi} key={index}/>
            ))}
           </ListGroup>
         </>
       )
   }
}

export default CommentsList;