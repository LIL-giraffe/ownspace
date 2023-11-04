import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const getVideo = async () => {
    const res = await fetch(YOUTUBE_API)
    const json = await res.json()
    setVideos(json.items)
  }
  useEffect(() => {
    getVideo()
  }, [])

  return (
    <div className='flex flex-wrap'>
      {
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id}><VideoCard info={video} /></Link>
        ))
      }
    </div>
  )
}

export default VideoContainer