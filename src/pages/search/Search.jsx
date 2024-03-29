import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDictionary } from '../../context/DictionaryContext';
import { CircleFadeLoader } from 'react-loaders-kit';
import './search.css';

const Search = () => {
  const { searchTerm } = useParams();
  const [res, setRes] = useState([]);
  const [ fetching, isFetching ] = useState(false);
  const { urban, other } = useDictionary();

  const optionsUrban = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: { term: `${searchTerm}` },
    headers: {
      'X-RapidAPI-Key': '434eb77b37msh2bd772753bd99c7p18b85bjsnefe11ac8e3a4',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

  const optionsOther = {
    method: 'GET',
    url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
    params: {word: `${searchTerm}`},
    headers: {
      'X-RapidAPI-Key': '434eb77b37msh2bd772753bd99c7p18b85bjsnefe11ac8e3a4',
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };

  console.log({ urban, other })

  useEffect(() => {
    if(urban){
      isFetching(true);
      axios
      .request(optionsUrban)
      .then((res) => {
        setRes(res.data);
        isFetching(false);
      }).catch((err) => {
        console.error(err);
      });
    } else if(other){
      isFetching(true);
      axios
      .request(optionsOther)
      .then((res) => {
        setRes(res.data);
        isFetching(false);
      }).catch((err) => {
        console.error(err);
      });
    }
  }, [])

  const [selected, setSelected] = useState(false);
  const [selectedObject, setSelectedObject] = useState({});

  const handleCellClick = (object) => {
    setSelected(true);
    setSelectedObject(object);
    const mainContainer = document.querySelector('.all');
    mainContainer.classList.add('overlay');
  };

  const closeModal = () => {
    setSelected(false);
    setSelectedObject({});
    const mainContainer = document.querySelector('.all');
    mainContainer.classList.remove('overlay');
  };

  return (
    <>
    <div className='all'>
      <h2 id='title'>Showing results for <span id='search-term'>"{searchTerm}"</span></h2>
      {isFetching && <CircleFadeLoader />}
      <div className='answer-grid'>
        {urban ?
          res?.list ?
          res?.list?.map((object) => {
            return (
              <div key={object.defid} className='answer-card' onClick={() => handleCellClick(object)}>
                <p>Author:</p>
                <h4>{object.author}</h4>
                <span>Definition:</span>
                <p>{object.definition}</p>
                <span>Examples:</span>
                <p>{object.example}</p>
                <div className='rating'>
                  <span>Rating:</span>
                  <div className='numbers'>
                      <span>{object.thumbs_up}</span>
                      <span>{object.thumbs_down}</span>
                  </div>
                </div>
                <span>Posted on:</span>
                <span>{object.written_on}</span>
              </div>
            )
          }) : <p>No definition found for that word</p>
        :
          <p>{res?.definition ? res?.definition : 'No definition found for that word'}</p>}
      </div>
    </div>
    {selected && (
        <div className="modal">
          <div className='modal-content'>
          <p>Author:</p>
              <h4>{selectedObject.author}</h4>
              <span>Definition:</span>
              <p>{selectedObject.definition}</p>
              <span>Examples:</span>
              <p>{selectedObject.example}</p>
              <div className='rating'>
                <span>Rating: </span>
                <div className='numbers'>
                    <span>{selectedObject.thumbs_up}</span>
                    <span>{selectedObject.thumbs_down}</span>
                </div>
              </div>
              <span>Posted on:</span>
              <span>{selectedObject.written_on}</span>
          </div>
          <button onClick={closeModal} className='button'>Close</button>
        </div>
      )}
    </>
  );
};

export default Search;