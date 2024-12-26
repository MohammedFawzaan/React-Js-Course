import { useState } from 'react';
import axios from 'axios';
import Card from './Card';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = 'c7afd27';

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`);
      console.log(response.data);

      if (response.data && response.data.Search) {
        setData(response.data.Search);
        setError(null);
      } else {
        setData([]);
        setError('No results found');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setData([]);
      setError('Failed to fetch data');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      fetchData();
    } else {
      setError('Please enter a valid search term.');
      setData([]);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold py-5">Movie List</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Search For Movie"
          value={inputValue}
          onChange={handleChange}
          className="flex-grow p-2 rounded bg-gray-800 text-white outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-5 w-full">
        {data &&
          data.map((movie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default App;