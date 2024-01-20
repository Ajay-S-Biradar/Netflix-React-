import React from 'react'
import { useSelector } from 'react-redux'
import Movies from './Movies';

const GptMovieSuggestion = () => {
    const suggestedMoviesInfo = useSelector(store=>store.gptsearch.suggestedMoviesInfo);
    if(!suggestedMoviesInfo) return ;

    console.log(suggestedMoviesInfo);
  return (
    <div className='mt-80 mx-20 flex flex-col bg-black bg-opacity-60 px-[2rem]' >
        {
            suggestedMoviesInfo.map((movies)=>{
                return <Movies movies={movies} />
            })
        }
    </div>
  )
}

export default GptMovieSuggestion