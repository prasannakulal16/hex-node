import React from 'react'

const VideoPlayer = ({ videoLinks }) => {
  return (
    <div className="py-20 text-center mx-auto xl:px-24 lg:px-14 sm:px-10 px-6">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Hexnode Explained: Watch Our Videos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {videoLinks.map((link, index) => (
          <div key={index} className="w-full max-w-md mx-auto">
            <iframe
              src={link}
              title={`Video ${index + 1}`}
              className="w-full aspect-video rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoPlayer
