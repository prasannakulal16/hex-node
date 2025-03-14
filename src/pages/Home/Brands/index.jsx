import Marquee from "react-fast-marquee";

import React from "react";

const fakeBranddata = [
  {
    id: 1,
    image: "src/assets/brands/1.svg",
  },
  {
    id: 2,
    image: "src/assets/brands/2.svg",
  },
  {
    id: 3,
    image: "src/assets/brands/3.svg",
  },
  {
    id: 4,
    image: "src/assets/brands/4.svg",
  },
  {
    id: 5,
    image: "src/assets/brands/5.svg",
  },
  {
    id: 6,
    image: "src/assets/brands/6.svg",
  },
  {
    id: 7,
    image: "src/assets/brands/7.svg",
  },
  {
    id: 8,
    image: "src/assets/brands/8.svg",
  },
  {
    id: 9,
    image: "src/assets/brands/9.svg",
  },
];

const Brands = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <Marquee>
            {fakeBranddata.map((Brand) => {
              return (
                <img
                  src={Brand.image}
                  key={Brand.id}
                  className="marquee-image"
                  alt="brand-image"
                />
              );
            })}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Brands;
