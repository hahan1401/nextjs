import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Video Streaming Example</h1>
      <video id="videoPlayer" width="640" height="360" controls>
        <source src="http://localhost:5151/uploads/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default page