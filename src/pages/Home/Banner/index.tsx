import React, { useState } from 'react'
import Button from '../../../components/ui/Button'
import Input from '../../../components/ui/Input'

const Banner = ({ bannerClients }) => {
  const [inputChange, setInputChange] = useState('')

  const handleChange = (e) => {
    setInputChange(e.target.value)
  }

  const ClientCard = ({ imageSrc, text }) => {
    return (
      <div className="flex flex-col items-center md:items-start px-6 text-center md:text-left space-y-3">
        <img src={imageSrc} className="mb-2 w-20 sm:w-24" alt="Client Logo" />
        <p className="text-white/60 text-sm sm:text-base">{text}</p>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#020A19] mx-auto xl:px-24 lg:px-14 sm:px-10 px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Move Image to Top in Mobile */}
          <div className="flex justify-center md:hidden">
            <img
              className="w-full max-w-lg md:max-w-2xl"
              src="src/assets/hexnode-kiosk.png"
              alt="Hexnode Kiosk"
            />
          </div>

          {/* Text + Input + Button */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight max-w-lg">
              Turn your devices into kiosks in a few minutes with Hexnode UEM
            </h1>

            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:flex-col sm:items-center md:items-start">
              {/* Input on Separate Line */}
              <Input
                placeholder="Your work email"
                value={inputChange}
                onChange={handleChange}
                className="text-gray-900 border border-gray-300 bg-gray-50 rounded-sm py-2 w-full sm:w-auto"
              />

              {/* Button on Separate Line */}
              <Button
                variant="primary"
                className="bg-red-600 text-white rounded-sm py-2 px-4 w-full sm:w-auto"
              >
                Get Started Now
              </Button>
            </div>
          </div>

          {/* Image (Hidden in Mobile, Shown in Desktop) */}
          <div className="hidden md:flex justify-center">
            <img
              className="w-full max-w-lg md:max-w-2xl"
              src="src/assets/hexnode-kiosk.png"
              alt="Hexnode Kiosk"
            />
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="bg-gray-700 mx-auto xl:px-24 lg:px-14 sm:px-10 px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-y-0 divide-y md:divide-x md:divide-y-0 divide-white/30">
          {bannerClients.map((client, index) => (
            <ClientCard key={index} imageSrc={client.imageSrc} text={client.text} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Banner
