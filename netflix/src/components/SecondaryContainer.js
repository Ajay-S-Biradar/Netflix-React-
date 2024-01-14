import React from 'react'
import Movies from './Movies'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movieList = useSelector(store=>store.movies);
  return (
    <div className='-mt-32 flex flex-col bg-black'>
        <div className='flex overflow-x-scroll'>
            <Movies movies={movieList.nowPlayingMovies} />
        </div>
        <div className=' flex overflow-x-scroll'>
            <Movies movies={movieList.nowPlayingMovies} />
        </div>
        <div className=' flex overflow-x-scroll'>
            <Movies movies={movieList.nowPlayingMovies} />
        </div>
    </div>
  )
}

export default SecondaryContainer