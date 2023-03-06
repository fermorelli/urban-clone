import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const { searchTerm } = useParams();
  const [ res, setRes ] = useState([])

    const options = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: {term: `${searchTerm}`},
    headers: {
        'X-RapidAPI-Key': '434eb77b37msh2bd772753bd99c7p18b85bjsnefe11ac8e3a4',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
    };

    useEffect(()=>{
      axios
        .request(options)
        .then((res) => {
        setRes(res.data);
        console.log(res.data)
    }).catch((err) => {
        console.error(err);
    });
    },[])

  return (
    <div>
      <h2>Showing results for <span>{searchTerm ? searchTerm : 'Your search'}</span></h2>
      <div>
        {res?.list?.map((i) => {
            return(
                <div key={i.defid}>
                    <h4>Author: {i.author}</h4>
                    <p>Definition: {i.definition}</p>
                    <p>Examples: {i.example}</p>
                    <div>
                        <span>Rating:</span>
                        <span>{i.thumbs_up}</span>
                        <span>{i.thumbs_down}</span>
                    </div>
                    <span>Posted on: {i.written_on}</span>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Search;