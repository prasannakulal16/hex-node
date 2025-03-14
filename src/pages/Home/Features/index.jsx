import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Tabs from '../../../components/ui/Tab'

const Features = ({ featureData }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="mx-auto xl:px-24 lg:px-14 sm:px-10 px-6 py-10">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-6">
        Specific kiosk modes for unique use cases
      </h2>

      {/* Mobile Scrollable Tabs */}
      <div className="md:hidden mb-6 overflow-x-auto whitespace-nowrap flex gap-4">
        {featureData.map((feature, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-md transition-all text-sm 
              ${
                activeIndex === index
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-gray-200 text-gray-700'
              }`}
          >
            {feature.btntitle}
          </button>
        ))}
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:block">
        <Tabs
          tabs={featureData.map((feature) => ({ label: feature.btntitle }))}
          activeIndex={activeIndex}
          onTabChange={setActiveIndex}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6"
        >
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-semibold">{featureData[activeIndex].title}</h3>
            <p className="text-gray-600 leading-relaxed">{featureData[activeIndex].content}</p>
          </div>
          <div className="flex justify-center items-center">
            <motion.img
              key={featureData[activeIndex].image}
              src={featureData[activeIndex].image}
              alt="Feature Image"
              className="rounded-lg shadow-xl w-3/4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Features
