import React from "react";

const TrendingGames = ({ games }) => {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] text-[#121212] dark:text-white">
        Trending Games
      </h2>
      <div className="md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-5">
        {games.map((game, index) =>
            index < 4 && (
              <div className="bg-[#76a8f75e] rounded-lg group hover:scale-110 
              transition-all duration-300 ease-in-out cursor-pointer" key={game.id}>
                <img
                  src={game.background_image}
                  alt="Trending Games"
                  className="h-[280px] rounded-t-lg object-cover"
                />
                <h2 className="text-[#121212] font-bold text-[20px] dark:text-white p-2">
                  {game.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
