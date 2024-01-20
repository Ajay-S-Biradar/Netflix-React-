import React from 'react'
import MovieCard from './MovieCard';

const Movies = ({movies}) => {
  return movies &&  (
    <div className='w-full flex overflow-x-scroll scrollbar-thin scrollbar-thumb-rounded-lg'>
        <div className='relative flex' >
            {
                movies.map((movie)=>{
                    return (
                        <div className=''>
                            <MovieCard movie={movie} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Movies