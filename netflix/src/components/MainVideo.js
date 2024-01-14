import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/contants';

const MainVideo = ({movieId}) => {
    const [trailer,setTrailer] = useState(null);
    useEffect(()=>{
        getVideo();
    },[]);

    const getVideo = async ()=>{
        const data =await fetch(`
        https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const filterData = json?.results.filter((x)=>{
            return x.type==="Trailer"
        });

        setTrailer("https://www.youtube.com/embed/"+filterData[0].key+"?&autoplay=1&mute=1&controls=0&loop=1");
    }
  return (
    <div className='w-full h-full' >
        <iframe className='w-full h-full'
        src={trailer} 
        allow="accelerometer; autoplay;mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
    </div>
  )
}

export default MainVideo