import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
    };

    return(
        <div className='app'>
            <div>
                <div className="titles">
                    <h1>Welcome to Urban Clone</h1>
                    <span>An Urban Dictionary search clone in wich you can search any word you want</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='fields'>
                        <label htmlFor="search-term">Search any word</label>
                        <input name="search-field" autoComplete="off" id="search-field" placeholder="search" type="search" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); }} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home;