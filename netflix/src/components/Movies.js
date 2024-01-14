import React from 'react'
import MovieCard from './MovieCard';

const Movies = ({movies}) => {
    console.log(movies);
  return movies &&  (
    <div className='flex w-full'>
    <div className='text-white' >"Now Playing"</div>
    <div className='relative gap-6 flex ' >
        {
            movies.map((movie)=>{
                return (
                    <MovieCard movie={movie} />
                )
            })
        }
    </div>
    </div>
  )
}

export default Movies