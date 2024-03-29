import React from 'react'
import MainVideo from './MainVideo'
import { useSelector } from 'react-redux'
import VideoInfo from './VideoInfo';

const MainContainer = () => {
    const movieInfo = useSelector((store) => store.movies?.nowPlayingMovies);
    if(movieInfo===null) return; 

    const {id} = movieInfo[0]; 
  return (
    <div className='w-full h-auto md:h-screen' >
        <VideoInfo info={movieInfo[0]} />
        <MainVideo movieId={id} />
    </div>
  )
}

export default MainContainer