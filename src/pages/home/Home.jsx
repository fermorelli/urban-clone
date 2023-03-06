import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
      };

    return(
        <>
        <h1>Welcome to Urban Clone</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search-term">Search any word</label>
            <input name="search-field" autoComplete="off" id="search-field" placeholder="search" type="search" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); }} />
        </form>
        </>
    )
}

export default Home;