import React, { useState } from 'react'
import useGetVideo from '../hooks/useGetVideo';

const MainVideo = ({movieId}) => {
    const [trailer,setTrailer] = useState(null);
    useGetVideo({setTrailer,movieId});

  return (
    <div className='w-full mt-14 md:mt-0 aspect-video md:h-full' >
        <iframe className='w-full h-full '
        src={trailer} 
        allow="accelerometer; autoplay;mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
    </div>
  )
}

export default MainVideo