import React from 'react'

const VideoInfo = ({info}) => {
    console.log(info);
  return (
    <div className='absolute w-full h-full flex justify-start items-center bg-transparent text-white bg-gradient-to-r from-black to-transparent' >
        <div className='w-1/4 m-20'>
            <div>
                <h1 className='text-3xl font-bold' >{info.original_title}</h1>
            </div>
            <div>
                <h1 className='text-lg font-medium' >{info.overview}</h1>
            </div>
            <div>
                <div className='flex gap-5 mt-10' >
                    <button className='w-32 py-3 bg-gray-500 rounded-lg' > Play</button>
                    <button className='w-32 py-3 bg-gray-500 rounded-lg' >More INfo</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoInfo