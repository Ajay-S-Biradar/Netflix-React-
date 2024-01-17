import React from 'react'
import Movies from './Movies'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movieList = useSelector(store=>store.movies);
  return (
    <div className='-mt-24 flex flex-col bg-black'>
        <div><h1 className='text-2xl text-white font-semibold'>Now Playing</h1></div>
        <div className='flex'>
            <Movies movies={movieList.nowPlayingMovies} />
        </div>
        <div><h1 className='text-2xl text-white font-semibold'>Popular Movies</h1></div>
        <div className='flex'>
            <Movies movies={movieList.popularMovies} />
        </div>
        <div><h1 className='text-2xl text-white font-semibold'>Up coming</h1></div>
        <div className=' flex'>
            <Movies movies={movieList.upcomingMovies} />
        </div>
    </div>
  )
}

export default SecondaryContainer