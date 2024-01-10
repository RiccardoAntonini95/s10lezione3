import React from "react";
import CommentsList from "./CommentList";

const headerAuth = {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllYThkMTZlYmM0YjAwMTg1MGYxYjAiLCJpYXQiOjE3MDQ4OTY3MjEsImV4cCI6MTcwNjEwNjMyMX0.ydL0AWTDDJL0uqvbx32aPs8u0-hw52zlw_DSbxqBwnw"}

class CommentArea extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            arrComments : []
        }
    }

    getComments = () => {
        fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.props.id ,{
            method: "GET",
            headers: headerAuth
        })
        .then(response => {
            if(response.ok){
                 return response.json()
            } else {
                 throw new Error('Errore nel recupero commenti!')
            }
        })
        .then(data =>{
            this.setState({arrComments: data})
        })
        .catch(err => {
            console.log("Errore", err)
        })
    }

    componentDidMount() {
		this.getComments();
	}

    render(){
        return(
            <div id="comment-list">
            <CommentsList commenti={this.state.arrComments}/>
            </div>
        )
    }

}

export default CommentArea;