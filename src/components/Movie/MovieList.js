import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import {useAtom} from "jotai";
import moviesAtom from "../../services/MovieService";


const MovieList = () => {
    const [movies, setMovies] = useAtom(moviesAtom)

    const removeMovie = (id) => {
        setMovies([...movies.filter((movie) => movie.id !== id)])
    }

    return (
        <div>
            <div className="card-deck">
                {movies.map(movie => (
                    <div key={movie.id}>
                        <button onClick={() => {removeMovie(movie.id)}}>x</button>
                        <MovieCard movie={movie}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

MovieList.defaultProps = {
    movies: [],
};

MovieList.propTypes = {
    movies: PropTypes.array,
};

export default MovieList;
