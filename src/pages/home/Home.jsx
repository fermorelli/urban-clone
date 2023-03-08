import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './home.css';
import { useDictionary } from '../../context/DictionaryContext';


const Home = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const { urban, setUrban, other, setOther } = useDictionary();

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
                    <div className='checkboxes'>
                        <label>
                        <input type="checkbox" checked={urban} onChange={(e) => setUrban(e.target.checked)} />
                        Search in Urban Dictionary
                        </label>
                        <label>
                        <input type="checkbox" checked={other} onChange={(e) => setOther(e.target.checked)} />
                        Search in other dictionary
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home;