import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = ({ testimonials, autoPlay = false, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="bg-gray-100 py-16 relative px-4">
      <h2 className="text-center text-2xl md:text-4xl font-semibold mb-8">
        Why should you choose Hexnode?
      </h2>
      <div className="container mx-auto max-w-4xl relative">
        {/* Left Arrow */}
        <button
          onClick={() => document.querySelector('.control-prev')?.click()}
          className="absolute left-2 md:-left-14 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-opacity-80"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => document.querySelector('.control-next')?.click()}
          className="absolute right-2 md:-right-14 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-opacity-80"
        >
          <FaChevronRight size={20} />
        </button>

        <Carousel
          autoPlay={autoPlay}
          showThumbs={false}
          interval={interval}
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          onChange={(index) => setActiveIndex(index)}
          className="shadow-lg rounded-lg overflow-hidden"
        >
          {testimonials.map((testi, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 bg-white p-6 rounded-lg gap-4">
                {/* Image Section */}
                <div className="flex justify-center">
                  <img
                    src={testi.image}
                    alt={testi.name}
                    className="w-48 h-80 md:w-48 md:h-72 object-cover rounded-full shadow-md"
                  />
                </div>

                {/* Testimonial Content Section */}
                <div className="col-span-2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
                  <p className="text-lg font-bold text-gray-700 max-h-32 overflow-auto">
                    "{testi.quote}"
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">{testi.name}</h3>
                  <p className="text-gray-500">{testi.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials
