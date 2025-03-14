import React from "react";

const Platform = ({ platforms }) => {
  return (
    <div className="py-5 md:py-40 mx-auto xl:px-24 lg:px-14 sm:px-10 px-6">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-8">
          Platforms Supported
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {platforms.map((platform, index) => (
            <div key={index}>
              <img
                src={platform.src}
                alt={platform.alt}
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
