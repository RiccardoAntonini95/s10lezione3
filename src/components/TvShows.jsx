import React from "react";
import Row from 'react-bootstrap/Row';
import SingleFilm from "./SingleFilm";

class TvShows extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
        filmArr : [] 
    }
    getFilms = async () => {
        try{
            const response = await fetch("http://www.omdbapi.com/?apikey=4282f56b&s=Jackass")
            if(response.ok){
                const data = await response.json()
                this.setState({filmArr: data.Search})
            } else {
                console.log("Errore del fetch")
            }
        } catch(err){
            console.log("Errore:", err)
        }
    }

    componentDidMount(){
        this.getFilms()
    }


  render() {
    return (
      <div>  
        <h4>TV Shows</h4>
        <Row xs={1} sm={2} lg={4} xl={6} className="mb-4 no-gutters text-center">
            {this.state.filmArr.map((movie, index) =>(
                <SingleFilm singleMovie={movie} key={index} />
            ))}
        </Row>
      </div>
    );
  }
}

export default TvShows