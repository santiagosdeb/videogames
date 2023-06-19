import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed bottom-4 right-4 p-3 bg-blue-500 text-xl text-white rounded-full focus:outline-none"
      onClick={scrollToTop}
    >
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollToTop;
