import React, { useEffect } from 'react'
import MainVideo from './MainVideo'
import { useDispatch, useSelector } from 'react-redux'
import VideoInfo from './VideoInfo';
import { gptClicked } from '../store/gptSlice';

const MainContainer = () => {
    const movieInfo = useSelector((store) => store.movies?.nowPlayingMovies);
    if(movieInfo===null) return; 

    const {id} = movieInfo[0]; 
  return (
    <div className='w-full h-screen' >
        <VideoInfo info={movieInfo[0]} />
        <MainVideo movieId={id} />
    </div>
  )
}

export default MainContainer