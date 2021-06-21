import React, {useState} from 'react';

import Header from './Header';
import Movies from './Movie/Movies';
import MoviesForm from './Movie/MovieForm';

const title = 'React Movie Cards';

const App = () => {
    return (
        <div>
            <Header title={title}/>
            <Movies/>
        </div>
    )
}

export default App;
