import React, {useState} from 'react';
import PropTypes from 'prop-types';


const MovieForm = ({onSubmit}) => {
    const [data, setData] = useState({
        imageUrl: undefined,
        title: undefined,
        subtitle: undefined,
        description: undefined,
    })
    const submit = () => {
        onSubmit(data)
    }

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={submit}>
                <div>
                    <label>
                        URL:
                        <input value={data.url} type="text" name="imageUrl" required onChange={handleChange}/>
                    </label>
                    <label>
                        Title:
                        <input value={data.title} type="text" name="title" required onChange={handleChange}/>
                    </label>
                    <label>
                        Subtitle:
                        <input value={data.subtitle} type="text" name="subtitle" required
                               onChange={handleChange}/>
                    </label>
                    <label>
                        Description:
                        <textarea value={data.description} name="description" onChange={handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
};

MovieForm.defaultProps = {
    movies: [],
};

MovieForm.propTypes = {
    movies: PropTypes.array,
};

export default MovieForm;
