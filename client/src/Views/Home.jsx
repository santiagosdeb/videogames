import React, { useEffect, useState } from "react";
import GenresList from "../Components/GenresList";
import GamesList from "../Components/GamesList";
import axios from "axios";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import ScrollToTop from "../Components/ScrollToTop";
import Loader from "../Components/Loader/Loader";

function Home() {
  const [allGames, setAllGames] = useState([]);
  const [allGamesPage2, setAllGamesPage2] = useState([]);
  const [gamesByGenre, setGamesByGenre] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const key = "6b3d981bcf744276b1de3b110ad69481";
  const endpoint = "https://api.rawg.io/api/games";

  const getAllGames = async () => {
    const { data } = await axios.get(`${endpoint}?key=${key}`);
    setAllGames(data.results);
  };

  const getGamesPage2 = async () => {
    const { data } = await axios.get(`${endpoint}?key=${key}&page=5`);
    setAllGamesPage2(data.results);
  };

  const getGamesByGenre = async (id) => {
    setIsLoading(true);
    const { data } = await axios.get(`${endpoint}?key=${key}&genres=${id}`);
    setGamesByGenre(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllGames();
    getGamesByGenre();
    getGamesPage2();
  }, []);

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block mr-5">
        <GenresList
          genreId={(genreId) => getGamesByGenre(genreId)}
          genreName={(name) => setSelectedGenreName(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGames?.length && allGamesPage2?.length ? (
          <>
            <Banner game={allGames} />
            {isLoading ? (
            <div className="flex justify-center items-center mt-40">
            <Loader />
            </div>
            ) : (
              <>
                {gamesByGenre?.length ? null : <TrendingGames games={allGamesPage2} />}
                <GamesList games={allGames} gamesByGenre={gamesByGenre} genreName={selectedGenreName} />
              </>
            )}
            {/* {gamesByGenre?.length ? null : (
              <TrendingGames games={allGamesPage2} />
            )}
            {isLoading ? (
              <div className="text-center text-white">LOADING...</div>
            ) : (
              <GamesList
                games={allGames}
                gamesByGenre={gamesByGenre}
                genreName={selectedGenreName}
              />
            )} */}
            <ScrollToTop />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
