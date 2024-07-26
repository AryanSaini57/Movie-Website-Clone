import React, { useEffect, useState } from "react";
import genreIds from "../utilities/genre";

function WatchList({ watchList, setWatchList, handleRemovetoWatchList }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(["All Genre"]);
  const [currGenre, setCurrGenre] = useState("All Genre");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncrease = () => {
    let sortedIncrease = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncrease]);
  };

  let sortDecrease = () => {
    let sortedDecrease = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecrease]);
  };

  let handleFilter = (movieOb) => {
    setCurrGenre(movieOb);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenre(["All Genre", ...temp]);
    console.log(temp);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genre.map((movieOb) => {
          return (
            <div
              onClick={() => handleFilter(movieOb)}
              className={
                currGenre == movieOb
                  ? "flex justify-center bg-blue-400 h-[3rem] w-[9rem] text-xl font-bold items-center text-white rounded-xl mx-2 hover:cursor-pointer"
                  : "flex justify-center bg-gray-400 h-[3rem] w-[9rem] text-xl font-bold items-center text-white rounded-xl mx-2 hover:cursor-pointer"
              }
            >
              {movieOb}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center flex-wrap m-4">
        <input
          onChange={handleSearch}
          value={search}
          className="bg-gray-200 outline-none w-[19rem] h-[2rem] text-l p-4"
          placeholder="Search Movies"
          type="text"
        />
      </div>

      <div className="overflow-hidden border border-gray-200 m-8">
        <table className="w-full text-center">
          <thead>
            <tr className="border-b-2">
              <th>Name</th>
              <th className="flex justify-center justify-around">
                <div onClick={sortIncrease}>
                  <i className="fa-solid fa-arrow-up hover:cursor-pointer hover:text-blue-500"></i>
                </div>
                <div>Rating</div>
                <div onClick={sortDecrease}>
                  <i className="fa-solid fa-arrow-down hover:cursor-pointer hover:text-blue-500"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movieObj) => {
                if (currGenre == "All Genre") {
                  return true;
                } else {
                  return genreIds[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id}>
                    <td className="flex items-center">
                      <img
                        className="p-4 w-[8rem] h-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="ml-6">{movieObj.original_title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreIds[movieObj.genre_ids[0]]}</td>
                    <td onClick={()=>handleRemovetoWatchList(movieObj)} className="font-bold text-white border border-white bg-red-500 hover:cursor-pointer">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
