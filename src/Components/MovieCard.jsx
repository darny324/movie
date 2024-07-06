import React, { useState } from 'react'

const MovieCard = (movie) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
     className='text-white relative rounded-md hover:transform hover:scale-110 ease-in-out duration-300 
     card hover:opacity-60 w-[280px]'>

      <div className={`absolute ${isHover ? 'opacity-100' : 'opacity-0'} text-lg left-2 top-1`}>
        <p>{movie.Year}</p>
      </div>

      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
      className='w-full h-full object-cover rounded-md'>
      </img>

      <div className={`
      title w-full absolute px-6 py-5 bottom-0 left-0 cursor rounded-b-md
      text-xl font-semibold 
      ${isHover ? 'bg-transparent' : 'bg-gray-800 '}
      `}>
        <p className={`${isHover ? 'text-[#ffffff]' : 'text-[#aaaaaa] '} `}>{movie.Type}</p>
        <p className='text-[#fda66d]'>{movie.Title}</p>
      </div>
      
    </div>
  )
}

export default MovieCard