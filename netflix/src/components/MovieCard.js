import React from 'react'
import { IMG_URL } from '../utils/contants';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
  return (
    <>
    <Link to={"/movie/"+movie?.id} >
    <div key={movie?.id} className='w-40 flex flex-col p-2'>
        <h1 className='text-white w-full truncate' >{movie?.title}</h1>
        <img className='w-full text-white' alt={movie?.original_title} src={IMG_URL+movie?.poster_path} />
    </div>
    </Link>
    </>
  )
}

export default MovieCard