import React from "react";

const GamesList = ({ games, gamesByGenre, genreName }) => {

  return (
    <div>
        <h2 className="text-[#121212] font-bold text-[30px] dark:text-white mt-5">
        Popular {gamesByGenre.length ? `${genreName} Games` : 'Games' }
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {(gamesByGenre.length ? gamesByGenre : games).map((game) => (
            <div className="bg-[#76a8f75e] p-3 rounded-lg rounded-lg group hover:scale-105 
            transition-all ease-in-out duration-300 cursor-pointer pb-10 h-full" key={game.id}>
              <img
                src={game.background_image}
                className="w-full h-[80%] rounded-xl object-cover"
              />
              <h2 className="text-[#121212] font-bold text-[20px] dark:text-white">
                {game.name}<span className="p-1 rounded-sm ml-2 text-[12px] bg-green-100 text-green-700 font-bold">{game.metacritic}</span>
              </h2>
              <h2 className="text-gray-500 text-[15px] dark:text-gray-300">
                ⭐{game.rating} 💬{game.ratings_count}
              </h2>
            </div>
          ))}
        </div>
      </div>
  );
};

export default GamesList;
