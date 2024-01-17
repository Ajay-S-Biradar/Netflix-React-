import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  const search = useSelector(store=>store.gptsearch.search)
  return search ? <GptSearch /> : (
    <>
      <MainContainer />
      <SecondaryContainer />
    </>
  )
}

export default Browse