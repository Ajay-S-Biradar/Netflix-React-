import React from 'react'
import { IMG_URL } from '../utils/contants';

const MovieCard = ({movie}) => {
    console.log(movie);
  return (
    <>
    <div key={movie?.id} className='w-36'>
        <img alt={movie?.original_title} src={IMG_URL+movie?.poster_path} />
    </div>
    </>
  )
}

export default MovieCard