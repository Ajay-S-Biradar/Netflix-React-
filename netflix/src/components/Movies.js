import React from 'react'
import MovieCard from './MovieCard';

const Movies = ({movies}) => {
  return movies &&  (
    <div className='w-full flex overflow-x-scroll scrollbar-thin scrollbar-thumb-rounded-lg'>
        <div className='relative gap-6 flex' >
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