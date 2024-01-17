import React, { useState } from 'react'
import run from './Geminisearch';

const GptSearchBar = () => {
    const [search,setSearch] = useState();
    const [searchmovies, setSearchMovies] = useState([]);
    const handleSearch = async (x)=>{
        const res = await run(x+' provide only the names in English seperate the names by comma and no extra info is required');
        setSearchMovies(res.split(',').map(movie=>movie.trim()));
    }

  return (
    <div className='absolute flex flex-col items-center justify-center w-full top-[10rem]' >
        <form className='w-1/2 grid grid-cols-12 m-2' 
            onSubmit={(e)=>{
                e.preventDefault();
                handleSearch(search);
            }}
        >
            <input type='text' className='bg-gray-300 py-2 px-4 m-2 rounded-lg col-span-9'
                onChange={(e)=>{
                    setSearch(e.target.value);
                }}
            />
            <input type='submit' className='bg-red-600 py-2 px-4 m-2 rounded-lg col-span-3' />
        </form>
        {
            searchmovies.map((x)=>{
                return (
                    <h1>{x}</h1>
                )
            })
        }
    </div>
  )
}

export default GptSearchBar