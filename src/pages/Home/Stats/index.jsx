import React from "react";
import { motion } from "framer-motion";

const StatsSection = ({ stats }) => {
  return (
    <div className="pt-10 pb-20 bg-gray-100 text-center mx-auto xl:px-24 lg:px-14 sm:px-10 px-6">
      <h2 className="text-3xl font-semibold mb-6">Our Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-4xl font-bold text-blue-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {stat.value}
            </motion.span>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
