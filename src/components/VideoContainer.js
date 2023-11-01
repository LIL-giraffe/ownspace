import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  const [videos,setVideos]=useState([])
  const getVideo=async()=>{
    const res=await fetch(YOUTUBE_API)
    const json=await res.json()
    setVideos(json.items)
  }
  useEffect(()=>{
    getVideo()
  },[])

  return (
    <div className='flex flex-wrap'>
      {
        videos.map((video)=>(<VideoCard info={video}/>))
      }
    </div>
  )
}

export default VideoContainer