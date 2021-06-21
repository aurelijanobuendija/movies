import React, {useEffect, useState} from 'react';

import MovieList from './MovieList';
import MoviesForm from './MovieForm';
import { useAtom } from 'jotai'
import moviesAtom from "../../services/MovieService";

const INDEX = 'index'
const FORM = 'form'

const Movies = () => {
    const [movies, setMovies] = useAtom(moviesAtom)

    const [switchView, setSwitchView] = useState(INDEX)

    const switchToForm = () => {
        setSwitchView(FORM)
    }

    const addMovie = (data) => {
        setMovies([...movies, data])
        setSwitchView(INDEX)
    }


    return (
        <div className="container-fluid" style={{marginLeft: '-15px'}}>
            <div className="d-flex flex-row">
                <div className="col-sm-12">
                    <button onClick={switchToForm}>Add Movie</button>
                    <div className="mt-5">
                        {switchView === INDEX ? <MovieList /> : <MoviesForm onSubmit={addMovie}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies;
