import React, { useEffect, useState } from "react";
import axios from "axios";

const GenresList = ({ genreId, genreName }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState();

  const key = "6b3d981bcf744276b1de3b110ad69481";
  const endpoint = "https://api.rawg.io/api/genres";

  const getGenreList = async () => {
    const { data } = await axios.get(`${endpoint}?key=${key}`);
    setGenreList(data.results);
  };

  const scrollToGenre = () => {
    window.scrollTo({
      top: 450,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    getGenreList();
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold text-[#121212] dark:text-white ml-2">Genre</h2>
      {genreList.map((genre, index) => (
        <div
          onClick={() => {
            setActiveIndex(index);
            genreId(genre.id);
            genreName(genre.name);
            scrollToGenre();
          }}
          className={`flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg 
          hover:dark:bg-gray-600 group ${
            activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : null
          }`}
          key={index}
        >
          <img
            src={genre.image_background}
            alt="Genre Logo"
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all 
            ease-in-out duration-100 ${activeIndex===index?'scale-105':null}`}
          />
          <h3
            className={`text-[#121212] dark:text-white text-[18px] group-hover:font-bold transition-all
            ease-in-out duration-100 ${activeIndex===index?'font-bold':null}`} 
          >
            {genre.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GenresList;
