import React from 'react'

const VideoInfo = ({info}) => {

  return (
    <div className='absolute w-full aspect-video  flex justify-start items-center bg-transparent text-white bg-gradient-to-r from-black to-transparent' >
        <div className='w-1/4 relative top-14 m-2 md:m-20'>
            <div>
                <h1 className='text-3xl font-bold' >{info.original_title}</h1>
            </div>
            <div>
                <h1 className='hidden md:flex text-lg font-medium' >{info.overview}</h1>
            </div>
            <div>
                <div className='flex gap-1 md:gap-5 mt-1 md:mt-10' >
                    <button className='w-32 text-sm md:text-base px-2 py-0 md:py-3 bg-transparent md:bg-gray-500 rounded-lg' >Play</button>
                    <button className='w-32 whitespace-nowrap text-sm md:text-base px-2 py-0 md:py-3 bg-transparent md:bg-gray-500 rounded-lg ' >More Info</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoInfo