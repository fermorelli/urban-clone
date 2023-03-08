import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './home.css';
import { useDictionary } from '../../context/DictionaryContext';


const Home = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const { setUrban, setOther } = useDictionary();

    const handleCheckboxChange = (value) => {
        setSelectedCheckbox(value);
        if (value === 'urban') {
            setUrban(true);
            setOther(false);
        } else {
            setOther(true);
            setUrban(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
    };

    return(
        <div className='app'>
            <div>
                <div className="titles">
                    <h1>Urban or Dictionary</h1>
                    <span>A search engine for looking at formal definitions or just to see what people is saying</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='checkboxes'>
                    <label>
                        <input type="checkbox" checked={selectedCheckbox === 'other'} onChange={(e) => handleCheckboxChange('other')} />
                            Search in the dictionary
                        </label>
                        <label>
                        <input type="checkbox" checked={selectedCheckbox === 'urban'} onChange={(e) => handleCheckboxChange('urban')} />
                            Search in Urban Dictionary
                        </label>
                    </div>
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