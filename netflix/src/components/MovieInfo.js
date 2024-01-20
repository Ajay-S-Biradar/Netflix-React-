import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/contants';
import { useParams } from 'react-router-dom';
import MainVideo from "./MainVideo"

const MovieInfo = () => {
    const {id} = useParams();
    const [moviedata,setMovieData] = useState();
    useEffect(()=>{
        apiCall();
    },[]);

    const apiCall =async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS);
        const json = await data.json();
        setMovieData(json);
        console.log(json);
    }
  return (
    <div className='absolute w-full h-full bg-black bg-opacity-20'>
        <div className='flex mt-40 mx-12 gap-6'>
            <div className='w-1/2 aspect-video'>
                <MainVideo movieId={id} />
            </div>
            <div className='gap-4 flex flex-col text-xl'>
                <h1 className='text-3xl font-semibold' >
                    {moviedata?.title}
                </h1>
                <h2 className='text-2xl font-medium'>
                    {moviedata?.tagline}
                </h2>
                <h2>
                    Rating: {moviedata?.vote_average} ⭐
                </h2>
                <h2>
                    Duration: {moviedata?.runtime} mins 
                </h2>
                <h2>
                    Release Date: {moviedata?.release_date}
                </h2>
                <h1 className='flex'>
                    Genres: {moviedata?.genres.map(x=><p> {x.name} ,</p>)}
                </h1>
            </div>
        </div>
        <div className='mx-14 my-4 text-xl'>
            {moviedata?.overview}
        </div>
    </div>
  )
}

export default MovieInfo;