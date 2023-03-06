import { useParams } from 'react-router-dom';

const Search = () => {
  const { searchTerm } = useParams();

  return (
    <div>
      <h2>Showing results for <span>{searchTerm ? searchTerm : 'Your search'}</span></h2>
      <div>
      </div>
    </div>
  );
};

export default Search;