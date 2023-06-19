import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";

const Banner = ({ game }) => {
  const [index, setIndex] = useState(0);
  const slidesQuantity = [];

  for (let i = 0; i < 5; i++) {
    slidesQuantity.push(i);
  };

  const prevSlide = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? 4 : index - 1;
    setIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = index === 4;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  const goToSlide = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div>
      <div className="relative mt-5 group">
        <div className={`absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full rounded-lg`}>
          <h2 className={`text-[32px] font-bold text-white`}>
            {game[index].name}
          </h2>
          <button className={`bg-blue-700 text-white px-2 p-1`}>
            Get it now!
          </button>
        </div>
        <img
          src={game[index].background_image}
          className={`md:h-[340px] lg:h-[400px] w-full object-cover rounded-xl `}
        />

        <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <IoIosArrowBack onClick={prevSlide} />
        </div>
        <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <IoIosArrowForward onClick={nextSlide} />
        </div>
      </div>
      <div className="flex justify-center py-2">
        {slidesQuantity.map((slide, index) => (
          <div
            className="text-xl text-[#121212] dark:text-white cursor-pointer"
            key={index}
            onClick={() => goToSlide(index)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
