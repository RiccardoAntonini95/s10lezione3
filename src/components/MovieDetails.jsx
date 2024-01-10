import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const MovieDetails = () => {
    const [film, setFilm] = useState({})
    const params = useParams()

    useEffect(() => {
        getFilms()
    },[] )
    
    
    const getFilms = async () => {
        try{
            const response = await fetch(`http://www.omdbapi.com/?apikey=4282f56b&i=${params.elementId}`)
            if(response.ok){
                const data = await response.json()
                console.log(data.Poster)
                setFilm(data)
                console.log(film.Title)
            } else {
                console.log("Errore del fetch")
            }
        } catch(err){
            console.log("Errore:", err)
        }
    }

    return(
        <div>
        <img className="img-fluid" src={film.Poster} alt="movie picture" />
        <ul className="text-white">
            <li>Title: {film.Title}</li>
            <li>Year: {film.Year}</li>
            <li>Runtime: {film.Runtime}</li>
            <li>Genre: {film.Genre}</li>
            <li>Director: {film.Director}</li>
            <li>Writer: {film.Writer}</li>
            <li>Actors: {film.Actors}</li>
            <li>Metascore: {film.Metascore}</li>
        </ul>
        </div>
    )
}

export default MovieDetails