import React from "react"
import Col from "react-bootstrap/Col"
import CommentArea from "./CommentArea"


class SingleFilm extends React.Component {
    constructor(props){
        super(props)
        this.state = { isSelected : false }
    }
    handleClick = () => {
        this.setState({ isSelected: !this.state.isSelected }) 
    }

    render(){
        return(
            <>
            <Col onClick={this.handleClick} className="mb-2 px-1">
                <img className="img-fluid" src={this.props.singleMovie.Poster} alt="movie picture" />
                {this.state.isSelected && <CommentArea id={this.props.singleMovie.imdbID} />}
            </Col>  
            </>
        )
    }
}

export default SingleFilm;