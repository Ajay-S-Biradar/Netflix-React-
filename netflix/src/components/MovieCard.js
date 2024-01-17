import React from 'react'
import { IMG_URL } from '../utils/contants';

const MovieCard = ({movie}) => {
  return (
    <>
    <div key={movie?.id} className='w-36 flex'>
        <img className='w-full' alt={movie?.original_title} src={IMG_URL+movie?.poster_path} />
    </div>
    </>
  )
}

export default MovieCard