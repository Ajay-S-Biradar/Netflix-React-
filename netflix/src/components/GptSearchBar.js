import React, { useState } from 'react'
import run from './Geminisearch';
import { options } from '../utils/languages';
import { useDispatch, useSelector } from 'react-redux';
import { addSuggestedMovies, addSuggestedMoviesInfo } from '../store/gptSlice';
import { API_OPTIONS } from '../utils/contants';

const GptSearchBar = () => {
    const [search,setSearch] = useState();
    const dispatch = useDispatch();
    // const [suggestedMovies,setSuggestedMovies] = useState();
    const gptLang = useSelector(store=>store.gptsearch.lang);
    const handleSearch = async (x)=>{
        const res = await run(x+' provide only the names in English seperate the names by comma only, not more than 5 names and no extra info is required');
        const suggestedMovies = ((res.split(',').map(movie=>movie.trim())));
            //will give me an array of promises 
        const promiseArray = suggestedMovies.map(movie=>apiCall(movie)); 
        const movieResults =await Promise.all(promiseArray);
        dispatch(addSuggestedMoviesInfo(movieResults));
    }

    const apiCall =async (movie)=>{
        const data =await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&page=1"+suggestedMovies[1]`,API_OPTIONS);
        const json =await data.json();
        return json.results ;
    }


  return (
    <>
    <div>

    </div>
    <div className='absolute flex flex-col items-center justify-center w-full top-[10rem]' >
        <form className='w-1/2 grid grid-cols-12 m-2' 
            onSubmit={(e)=>{
                e.preventDefault();
                handleSearch(search);
            }}
        >
            <input type='text' className='bg-gray-300 py-2 px-4 m-2 rounded-lg col-span-9'
                placeholder={options[gptLang]?.GptPlaceHolder}
                onChange={(e)=>{
                    setSearch(e.target.value);
                }}
            />
            <input type='submit' className='bg-red-600 py-2 px-4 m-2 rounded-lg col-span-3' value={options[gptLang]?.search} />
        </form>
    </div>
    </>
  )
}

export default GptSearchBar