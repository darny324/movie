import React, {useState, useEffect, useRef} from 'react'
import searchIcon from './assets/images/search-icon2.png'
import MovieCard from './Components/MovieCard';
// 6825be27
const MOVIE_API = "http://www.omdbapi.com/?i=tt3896198&apikey=6825be27";


function App() {

  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchitem] = useState('');
  const inputRef = useRef();

  const searchMovies = async (title) => {
    const response = await fetch(`${MOVIE_API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);

    setSearchitem('');
  }

  useEffect(() => {
    searchMovies('batman');
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <div className='text-center'>
        <h1 className="
        inline-block bg-gradient-to-l from-[#8E2DE2] to-[#4A00E0] bg-clip-text 
        text-transparent text-4xl font-bold mt-10">Movieland</h1>
      </div>

      <form className='
      flex px-4 py-3 justify-between
      text-lg w-[700px] max-xl:w-[600px] max-lg:w-[500px] max-md:w-[400px] text-slate-600 rounded-full border-solid border-slate-700
          mt-8 bg-[#1a1919] max-sm:w-[300px]
      '>
        <input type='text' placeholder="Search the movies" 
        value={searchItem}
        onChange={(e) => setSearchitem(e.target.value)}
        className='
        focus:outline-none bg-none bg-[#1a1919]
        flex-1
        ' id='movie-name'></input>

        <button type='button' onClick={() => { searchMovies(searchItem)}}>
          <img src={searchIcon} width={24} height={24}></img>
        </button>
      </form>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10 px-10'>
        {
          movies?.length > 0 ? 
          ( 
            movies.map( (movie) => {
              return (
                <MovieCard key={`${movie.Title}-${movie.Year}`} {...movie}/>
              );
            })
          )
          : (
            <div className='text-white font-semibold text-xl'>No Movies Found</div>
          )
        }
      </div>
    </div>
  )
}

export default App
